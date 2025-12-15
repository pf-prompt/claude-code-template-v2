import { command, computed, state } from 'ccstate'
import { currentRouteAndParams$, generateRouterPath } from './routeRegistry'
import { sharedLocationState } from '../../state/sharedLocationState'
import { detach } from '../../../common/ccstatex/promise'
import { onDomEventFn } from '../../../common/ccstatex/onDomEvent'
import { resetSignal } from '../../../common/ccstatex/signals'
import { updatePage$ } from './currentPage'
import { rootSignal$ } from '../../../common/ccstatex/rootSignal'
import { logger } from '../../../common/infra/log'
import { afterNavigateReportToSentry } from '../sentryClient'
import { authCommand } from '../../../common/infra/auth/authCommand'

const L = logger('navigate')

const innerPageSignal$ = state<AbortSignal | undefined>(undefined)

type RouteChangeCallback = (pathname: string) => void

const routeChangeCallbacks$ = state<RouteChangeCallback[]>([])

const safeInvokeRouteChangeCallback = (callback: RouteChangeCallback, pathname: string) => {
  try {
    callback(pathname)
  } catch (error) {
    L.error(`Error invoking route change callback: ${error}`)
  }
}

const invokeRouteChangeCallbacks$ = command(({ get }) => {
  const callbacks = get(routeChangeCallbacks$)
  const pathname = get(sharedLocationState.pathname$)
  callbacks.forEach((callback) => safeInvokeRouteChangeCallback(callback, pathname))
})

export const onRouteChange$ = command(({ get, set }, callback: RouteChangeCallback, signal: AbortSignal) => {
  const callbacks = get(routeChangeCallbacks$)
  set(routeChangeCallbacks$, [...callbacks, callback])

  const pathname = get(sharedLocationState.pathname$)
  safeInvokeRouteChangeCallback(callback, pathname)

  signal.addEventListener('abort', () => {
    const currentCallbacks = get(routeChangeCallbacks$)
    set(
      routeChangeCallbacks$,
      currentCallbacks.filter((cb) => cb !== callback),
    )
  })
})

export const pageSignal$ = computed((get) => {
  const signal = get(innerPageSignal$)
  if (!signal) {
    throw new Error('No page signal')
  }
  return signal
})

export const setPageSignal$ = command(({ set }, signal: AbortSignal) => {
  set(innerPageSignal$, signal)
})

const resetRouteSignal$ = resetSignal()

const loadRoute$ = command(async ({ get, set }, signal?: AbortSignal) => {
  const currentPath = get(sharedLocationState.pathname$)
  if (currentPath === '/auth/callback') {
    await set(authCommand.performVerification$)
    return
  }

  const routeSignal = set(resetRouteSignal$, ...([signal].filter(Boolean) as AbortSignal[]))

  if (get(sharedLocationState.pathname$) === '/auth/callback') {
    await set(authCommand.performVerification$)
    return
  }
  const currentRouteAndParams = get(currentRouteAndParams$)
  if (!currentRouteAndParams) {
    throw new Error('No route matches, pathname: ' + get(sharedLocationState.pathname$))
  }
  const [currentRoute, routeParams] = currentRouteAndParams
  set(setPageSignal$, routeSignal)
  routeSignal.throwIfAborted()

  if (currentRoute.onBeforeNavigate) {
    const redirectTo = await get(currentRoute.onBeforeNavigate)
    if (redirectTo !== undefined) {
      await set(navigateInReact$, redirectTo)
      return
    }
  }
  routeSignal.throwIfAborted()
  const view = currentRoute.viewFactory(routeParams)
  set(updatePage$, view)
  set(invokeRouteChangeCallbacks$)

  if (process.env.VITE_USE_PROTOTYPE === 'false') {
    afterNavigateReportToSentry(currentRoute.path)
  }
})

const navigateToDefaultWhenInvalid$ = command(({ get, set }) => {
  const currentPath = get(sharedLocationState.pathname$)
  if (currentPath === '/auth/callback') {
    return
  }
  if (!get(currentRouteAndParams$)) {
    set(sharedLocationState.pathname$, location.pathname)
    history.pushState({}, '', '/')
  }
})

export const initRoutes$ = command(async ({ get, set }, signal: AbortSignal) => {
  if (get(sharedLocationState.pathname$)) {
    L.debug(L.fmt`use injected pathname: ${get(sharedLocationState.pathname$)}`)
  } else {
    L.debug(L.fmt`init pathname: ${location.pathname}`)
    set(sharedLocationState.pathname$, location.pathname)
  }
  set(navigateToDefaultWhenInvalid$)

  window.addEventListener(
    'popstate',
    onDomEventFn(async () => {
      set(sharedLocationState.pathname$, location.pathname)
      set(navigateToDefaultWhenInvalid$)
      await set(loadRoute$, signal)
    }),
    { signal },
  )

  await set(loadRoute$, signal)
})

interface NavigateOptions {
    searchParams?: URLSearchParams
}

export const navigate$ = command(async ({ set }, pathname: string, options: NavigateOptions, signal: AbortSignal) => {
  L.debug(L.fmt`navgiate to ${pathname}`)
  const searchParams = options.searchParams ? `?${options.searchParams.toString()}` : ''
  history.pushState({}, '', `${pathname}${searchParams}`)
  set(sharedLocationState.pathname$, location.pathname)
  await set(loadRoute$, signal)
})

export const navigateInReact$ = command(
  (
    { set, get },
    pathname: Parameters<typeof generateRouterPath>[0],
    options?: {
            pathParams?: Parameters<typeof generateRouterPath>[1]
            searchParams?: URLSearchParams
        },
  ) => {
    const signal = get(rootSignal$)

    detach(
      set(navigate$, generateRouterPath(pathname, options?.pathParams), options ?? {}, signal),
      'DomCallback',
    )
  },
)
