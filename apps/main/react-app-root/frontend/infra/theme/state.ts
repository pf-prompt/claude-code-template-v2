import { computed, state } from 'ccstate'
import { ALL_THEMES, INITIAL_COLOR_MODE, INITIAL_STYLE } from './config'
import { ThemeMetadata, themeMetadata } from './themeMetadata'

export type ColorMode = 'light' | 'dark'
export type ThemeStyle = (typeof ALL_THEMES)[number]

export interface Theme {
  colorMode: ColorMode
  style: ThemeStyle
}

const theme$ = state<Theme>({
  colorMode: INITIAL_COLOR_MODE,
  style: INITIAL_STYLE,
})

const themeMetadata$ = computed<ThemeMetadata>((get) => {
  const themeStyle = get(internalThemeState.theme$).style
  const ret = themeMetadata.get(themeStyle)
  if (!ret) {
    throw Error(`theme ${themeStyle} not registered`)
  }
  return ret
})

const isDark$ = computed((get) => {
  const colorMode = get(internalThemeState.theme$).colorMode
  if (colorMode === 'dark') {
    return true
  }
  if (typeof window === 'undefined') {
    return false
  }
  return false
})

export const internalThemeState = {
  theme$,
  themeMetadata$,
  isDark$,
}
