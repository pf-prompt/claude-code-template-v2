import { createStore } from 'ccstate'
import { renderApp } from './render-app'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const injected = (globalThis as any)._injected

const store = createStore()
renderApp(store, injected)
