import { AsyncLocalStorage } from 'node:async_hooks'
import type { Getter, Store } from 'ccstate'
import { apiRegistry } from '../../common/infra/apiRegistry'

// although Sentry as a async local context
// we do not want business logic to depend upon Sentry context
// use Sentry for pure observability purpose
// we choose to store a separate async local context for business logic
export const backendContext = new AsyncLocalStorage<Store>()

export const getContext: Getter = (signal) => {
  if (apiRegistry.useDirectRoute) {
    return apiRegistry.useDirectRoute(signal)
  }
  const store = backendContext.getStore()
  if (!store) {
    throw new Error('missing backendContext')
  }
  return store.get(signal)
}