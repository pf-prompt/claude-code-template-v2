import { computed, state } from 'ccstate'
import { isInjectableInstances } from './instances'
import { isComputed, isState } from './guard'

const SUPPORT_COMPUTED = false

type Loadable = {
    state: 'loading';
} | {
    state: 'hasData';
    data: Awaited<unknown>;
} | {
    state: 'hasError';
    error: unknown;
};

function isLoadable(obj: unknown): obj is Loadable {
  const maybeLoadable = obj as (Loadable | undefined)
  if (maybeLoadable?.state === 'loading' || maybeLoadable?.state === 'hasData' || maybeLoadable?.state === 'hasError') {
    return true
  }
  return false
}

function injectStateByKey(stateObj: Record<string, unknown>, fakeJson: Record<string, unknown>, key: string) {
  try {
    const stateValue = stateObj[key]
    const fakeJsonValue = fakeJson[key]
    if (stateValue === undefined) {
      throw new Error('state missing key from fakeJson: ' + key)
    }
    if (typeof stateValue !== 'object') {
      throw new Error('unexpected: ' + stateValue)
    }
    if (isInjectableInstances(stateValue)) {
      for (const [instanceKey, instanceFakeJson] of Object.entries(fakeJsonValue as object)) {
        const instanceState = stateValue.__injectInstance(instanceKey)
        injectState(instanceState, instanceFakeJson as Record<string, unknown>)
      }
    } else if (isState(stateValue)) {
      stateObj[key] = state(fakeJsonValue)
    } else if (isComputed(stateValue)) {
      if (!SUPPORT_COMPUTED) {
        throw new Error(`do not support inject computed, key: ${key}`)
      }
      if (isLoadable(fakeJsonValue)) {
        if (fakeJsonValue.state === 'loading') {
          stateObj[key] = computed(() => {
            return new Promise(() => {}) // never return
          })
        } else if (fakeJsonValue.state === 'hasError') {
          stateObj[key] = computed(() => {
            return new Promise((_, reject) => {
              reject(fakeJsonValue.error)
            })
          })
        } else {
          stateObj[key] = computed(() => fakeJsonValue.data)
        }
      } else {
        stateObj[key] = computed(() => fakeJsonValue)
      }
    } else if (Array.isArray(stateValue)) {
      throw new Error('unexpected')
    } else {
      injectState(stateValue as Record<string, unknown>, fakeJsonValue as Record<string, unknown>)
    }
  } catch(e) {
    console.error('failed to inject key', key, 'of fake json: ', JSON.stringify(fakeJson))
    throw e
  }
}

export function injectState(stateObj: Record<string, unknown>, fakeJson: Record<string, unknown>) {
  for (const key of Object.keys(fakeJson)) {
    injectStateByKey(stateObj, fakeJson, key)
  }
}
