import { command } from 'ccstate'
import { injectAllState, takeAllStateSnapshot } from './prototypeReactState'
import { routeConfigs$ } from './infra/router/routeRegistry'
import { navigateInReact$, onRouteChange$ } from './infra/router/navigate'
import { RoutePath } from './infra/router/RoutePath'
import { setThemeChangedHandler$ } from './infra/theme/bridge'

export const setupGlobalMethods$ = command(({ get, set }, signal: AbortSignal) => {
  signal.addEventListener('abort', () => {
    globalThis.takeStateSnapshot = undefined
    globalThis.injectStateSnapshot = undefined
    globalThis.getAllRoutePaths = undefined
    globalThis.changeRoutePath = undefined
    globalThis.onRouteChange = undefined
    globalThis.setThemeChangedHandler = undefined
  })

  globalThis.takeStateSnapshot = async () => {
    const snapshot = await takeAllStateSnapshot(get)
    return snapshot
  }

  globalThis.injectStateSnapshot = (state: unknown) => {
    injectAllState(state)
  }

  globalThis.getAllRoutePaths = () => {
    const routeConfigs = get(routeConfigs$)
    return routeConfigs.map(config => config.path)
  }

  globalThis.changeRoutePath = (path: RoutePath) => {
    set(navigateInReact$, path)
  }

  globalThis.onRouteChange = (callback: (pathname: string) => void, signal: AbortSignal) => {
    set(onRouteChange$, callback, signal)
  }
  
  globalThis.setThemeChangedHandler = (callback) => {
    set(setThemeChangedHandler$, callback)
  }
})