import { command, computed, state, type Computed } from 'ccstate'
import { match } from 'path-to-regexp'
import type { ReactNode } from 'react'
import { logger } from '../../../common/infra/log'
import { sharedLocationState } from '../../state/sharedLocationState'
import type { RoutePath } from './RoutePath'

const L = logger('routeRegistry')

// /projects/:id => { id: string }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ExtractParams<T extends string> = T extends `/${infer _Start}/:${infer Param}` ? Record<Param, string> : undefined

export const generateRouterPath = <T extends RoutePath>(path: T, pathParams?: ExtractParams<T>): string => {
  const routerPrefix = process.env.ROUTER_PREFIX ?? ''
  if (!pathParams || Object.keys(pathParams).length === 0) {
    return `${routerPrefix}${path}`
  }
  let _path = `${routerPrefix}${path}`
  for (const [key, value] of Object.entries(pathParams)) {
    _path = _path.replace(`:${key}`, value as string)
  }
  return _path
}

export interface RouteConfig {
  path: RoutePath
  onBeforeNavigate?: Computed<Promise<RoutePath | undefined>>
  viewFactory: (routeParams: Record<string, string>) => ReactNode
}

const internalRouteConfigs$ = state<RouteConfig[]>([])

export const routeConfigs$ = computed((get) => {
  return get(internalRouteConfigs$)
})

export const registerRoutes$ = command(({ set }, configs: RouteConfig[]) => {
  set(internalRouteConfigs$, configs)
})

export const currentRouteAndParams$ = computed((get) => {
  const currentPath = get(sharedLocationState.pathname$)
  const routeConfigs = get(internalRouteConfigs$)

  for (const config of routeConfigs) {
    const matcher = match(config.path, { decode: decodeURIComponent })
    const result = matcher(currentPath)
    if (result) {
      L.debug(L.fmt`hit path ${currentPath}`)
      return [config, result.params as Record<string, string>] as const
    }
  }
  L.debug(L.fmt`hit no path, registered paths: ${routeConfigs.map(config => config.path)}, pathname: ${currentPath}`)
  return undefined
})

export const currentRoutePath$ = computed((get) => {
  const routeAndParams = get(currentRouteAndParams$)
  if (routeAndParams) {
    return routeAndParams[0].path
  } else {
    return undefined
  }
})