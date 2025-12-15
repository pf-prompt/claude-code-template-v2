import type { Getter } from 'ccstate'
import { isComputed, isState } from './guard'
import { isExportableInstances } from './instances'

type Loadable<T> = {
  state: 'loading';
} | {
  state: 'hasData';
  data: Awaited<T>;
} | {
  state: 'hasError';
  error: unknown;
};

const SUPPORT_COMPUTED = false

async function peekPromise<T>(promise: Promise<T>): Promise<Loadable<T>> {
  let data: T | undefined = undefined
  let hasData = false
  let error: unknown = undefined
  let hasError = false
  promise.then(_data => {
    hasData = true
    data = _data
  }).catch(_error => {
    hasError = true
    error = _error
  })
  await new Promise<void>(resolve => resolve()) // yield control
  if (hasData) {
    return { state: 'hasData', data: data as Awaited<T> }
  } else if (hasError) {
    return { state: 'hasError', error }
  } else {
    return { state: 'loading' }
  }
}

function isPromise(obj: unknown): obj is Promise<unknown> {
  const maybePromise = obj as (Promise<unknown> | undefined)
  return obj !== null &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof maybePromise?.then === 'function'
}

async function takeStateSnapshotImpl(get: Getter, stateObj: object) {
  if (typeof stateObj !== 'object') {
    return stateObj
  } else if (stateObj === null) {
    return null
  } else if (Array.isArray(stateObj)) {
    return stateObj
  } else if (isState(stateObj)) {
    return get(stateObj)
  } else if (isComputed(stateObj)) {
    if (SUPPORT_COMPUTED) {
      const maybePromise = get(stateObj)
      if (isPromise(maybePromise)) {
        return await peekPromise(maybePromise)
      } else {
        return { state: 'hasData', data: maybePromise }
      }
    } else {
      return undefined
    }
  } else if (isExportableInstances(stateObj)) {
    return await takeStateSnapshotImpl(get, stateObj.__exportInstances())
  } else {
    const snapshot: Record<string, unknown> = {}
    for(const [k, v] of Object.entries(stateObj)) {
      snapshot[k] = await takeStateSnapshotImpl(get, v)
    }
    return snapshot
  }
}

export async function takeStateSnapshot(get: Getter, stateObj: object) {
  const dst = await takeStateSnapshotImpl(get, stateObj)
  return dst
}