import { computed } from 'ccstate'
import { internalThemeState } from '../../infra/theme/state'
import { THEME_CONTAINER_SELECTOR } from '../../infra/theme/types'

export const cssVarQueryFactory = (cssVar: string, fallback: string) => computed((get) => {
  get(internalThemeState.theme$)
  
  const el = document.querySelector(THEME_CONTAINER_SELECTOR)
  if (el) {
    const value = getComputedStyle(el).getPropertyValue(cssVar)
    if (value) {
      return value
    }
  }
  return fallback
})
