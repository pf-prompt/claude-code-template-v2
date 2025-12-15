// MUST NOT add the other new smoke test
import { test } from 'vitest'
import { createStore } from 'ccstate'
import { renderApp } from '../render-app'
import ResizeObserverPolyfill from 'resize-observer-polyfill'
import { injectAllState, takeAllStateSnapshot } from '../prototypeReactState'

global.ResizeObserver = ResizeObserverPolyfill

test('test front end smoke', async () => {
  const rootEl = document.createElement('div')
  rootEl.id = 'bundler-root'
  document.body.append(rootEl)

  const store = createStore()
  await renderApp(store, {
    prototypeMems: {},
    stateTreeRoot: {
      sharedLocationState: {
        pathname$: '/design-system/theme',
      },
    },
  })
})

test(
  'test take/inject state',
  async () => {
    const store = createStore()
    await renderApp(store, {
      prototypeMems: {},
      stateTreeRoot: {
        sharedLocationState: {
          pathname$: '/design-system/theme',
        },
      },
    })

    const allState = await takeAllStateSnapshot(store.get)
    await injectAllState(JSON.parse(JSON.stringify(allState)))
  },
  15 * 1000
)
