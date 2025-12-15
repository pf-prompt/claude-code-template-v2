
import './themes/index'
import { command } from 'ccstate'
import { registerRoutes$ } from './infra/router/routeRegistry'
import { designSystemRoutes } from './storybook'
import { routeConfigs } from './pages'
import { setupPrototype } from './prototype/setupPrototype'
import { setRootSignal$ } from '../common/ccstatex/rootSignal'
import * as prototypeReactState from './prototypeReactState'
import { setupGlobalMethods$ } from './global-method'
import { setupIsMobile$ } from './infra/theme/isMobile'

const usePrototype = process.env.VITE_USE_PROTOTYPE !== 'false'

export const bootstrap$ = command(async ({set}, _injected: unknown, signal: AbortSignal) => {
  set(registerRoutes$, [...designSystemRoutes, ...routeConfigs])

  if (usePrototype) {
    set(setupPrototype)
  }
  set(setRootSignal$, signal)

  if (_injected) {
    prototypeReactState.injectAllState(_injected)
  }

  set(setupGlobalMethods$, signal)

  set(setupIsMobile$)
})