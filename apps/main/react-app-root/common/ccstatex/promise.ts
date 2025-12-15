import { command, type Command } from 'ccstate'
import { IN_TEST } from '../infra/env'
import { logger } from '../infra/log'
import { isAbortError, throwIfAbort, throwIfNotAbort } from './signals'

export type Reason = 'Daemon' | 'DomCallback' | 'Entrance' | 'Deferred' | 'DatadogLog' | 'Toast';

const L = logger('Promise')

const collectedPromise = new Set<Promise<unknown>>()
const promiseReason = new Map<Promise<unknown>, Reason>()
const promiseDescription = new Map<Promise<unknown>, string>()

export function detach<T>(promise: T | Promise<T>, reason: Reason, description?: string): void {
  L.debug(L.fmt`Detach promise: ${reason}, ${description}`)

  const isPromise = promise instanceof Promise
  let silencePromise
  if (isPromise) {
    silencePromise = (async () => {
      try {
        await promise
      } catch (error) {
        throwIfNotAbort(error)
      }
    })()
  }

  if (IN_TEST && silencePromise) {
    collectedPromise.add(silencePromise)
    promiseReason.set(silencePromise, reason)
    if (description) {
      promiseDescription.set(silencePromise, description)
    }
  }
}

const internalResetAllPromiseTracking = () => {
  collectedPromise.clear()
  promiseReason.clear()
  promiseDescription.clear()
}

export async function clearAllDetached() {
  if (!IN_TEST) {
    collectedPromise.clear()
    promiseReason.clear()
    promiseDescription.clear()

    return []
  }

  L.debug('Clear all detached promises')

  const settledResult = []

  for (const promise of collectedPromise) {
    const reason = promiseReason.get(promise)
    const description = promiseDescription.get(promise)
    L.debug(`Await promise: ${reason ?? 'unknown'} ${description ?? ''}`)
    try {
      const result = await promise
      settledResult.push({
        promise,
        reason,
        description: promiseDescription.get(promise),
        result,
      })
    } catch (error) {
      if (!isAbortError(error)) {
        internalResetAllPromiseTracking()
        throw error
      }
      settledResult.push({
        promise,
        reason,
        description: promiseDescription.get(promise),
        error,
      })
    }
  }
  internalResetAllPromiseTracking()

  return settledResult
}

export function parallel<T extends readonly unknown[]>(
  signal: AbortSignal,
  ...promises: T
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
  const ret = Promise.all(promises)
  signal.throwIfAborted()
  return ret
}

export function createDeferredPromise<T>(signal: AbortSignal): {
    promise: Promise<T>
    resolve: (value: T) => void
    reject: (reason?: unknown) => void
    settled: () => boolean
} {
  let _resolve: ((value: T) => void) | undefined
  let _reject: ((reason?: unknown) => void) | undefined
  let settled = false

  const promise = new Promise<T>((resolve, reject) => {
    _resolve = (value: T) => {
      if (settled) {
        throw new Error('Deferred promise already settled')
      }
      settled = true
      resolve(value)
    }
    _reject = (reason?: unknown) => {
      if (settled) {
        throw new Error('Deferred promise already settled')
      }
      settled = true
             
      reject(reason)
    }
  })

  detach(promise, 'Deferred')

  signal.addEventListener('abort', () => {
    if (!settled) {
      _reject?.(signal.reason)
    }
  })

  return {
    promise,
    resolve: _resolve as unknown as (value: unknown) => void,
    reject: _reject as unknown as (reason?: unknown) => void,
    settled: () => settled,
  }
}

export const promiseWithRetry$ = command(
  async ({ set }, promise: Command<Promise<unknown>, []>, retries: number, signal: AbortSignal): Promise<boolean> => {
    if (retries <= 0) {
      return false
    }

    try {
      await set(promise)
      signal.throwIfAborted()
      return true
    } catch (error) {
      throwIfAbort(error)
      return await set(promiseWithRetry$, promise, retries - 1, signal)
    }
  },
)
