import { command, computed, state } from 'ccstate'

const MOBILE_BREAKPOINT = 768

const _isMobile$ = state(false)

export const isMobile$ = computed(get => get(_isMobile$))

export const setupIsMobile$ = command(({ set }) => {
  if (!globalThis.window || typeof window.matchMedia !== 'function') {
    return
  }

  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
  mql.addEventListener('change', () => {
    set(_isMobile$, window.innerWidth < MOBILE_BREAKPOINT)
  })
  set(_isMobile$, window.innerWidth < MOBILE_BREAKPOINT)
})
