
export const ALL_THEMES = [
  'theme-default',
  

] as const

export const INITIAL_COLOR_MODE = 'light'
export const INITIAL_STYLE = 'theme-default'

export type ThemeStyle = (typeof ALL_THEMES)[number]
