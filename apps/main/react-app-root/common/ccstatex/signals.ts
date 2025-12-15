import { command, state, type Command } from 'ccstate'

export const isAbortError = (error: unknown): boolean => {
  if ((error instanceof Error || error instanceof DOMException) && error.name === 'AbortError') {
    return true
  }

  if (
    typeof error === 'object' &&
        error !== null &&
        'reason' in error &&
        error.reason instanceof Error &&
        error.reason.name === 'AbortError'
  ) {
    return true
  }

  return false
}

export function throwIfAbort(e: unknown) {
  if (isAbortError(e)) {
    throw e
  }
}

export function throwIfNotAbort(e: unknown) {
  if (!isAbortError(e)) {
    throw e
  }
}

export function resetSignal(): Command<AbortSignal, AbortSignal[]> {
  const controller$ = state<AbortController | undefined>(undefined)

  return command(({ get, set }, ...signals: AbortSignal[]) => {
    get(controller$)?.abort()
    const controller = new AbortController()
    set(controller$, controller)

    return AbortSignal.any([controller.signal, ...signals])
  })
}