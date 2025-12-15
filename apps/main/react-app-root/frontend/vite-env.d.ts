/// <reference types="vite/client" />

declare global {
  var takeStateSnapshot: (() => Promise<{
    prototypeMems: Record<string, unknown>,
    stateTreeRoot: unknown
  }>) | undefined

  var injectStateSnapshot: ((state: unknown) => void) | undefined
  var getAllRoutePaths: (() => string[]) | undefined
  var changeRoutePath: ((path: RoutePath) => void) | undefined
  var onRouteChange: ((callback: (pathname: string) => void, signal: AbortSignal) => void) | undefined
  var setThemeChangedHandler: ((callback: ((type: string, value: string) => void)) => void) | undefined
}

export {}