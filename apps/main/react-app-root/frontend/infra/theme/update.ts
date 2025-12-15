import { command } from 'ccstate'
import { bridgeUpdateColorMode$, bridgeUpdateThemeStyle$ } from './bridge'
import { internalThemeState } from './state'

export const updateThemeStyle$ = command(({ get, set }, style: string) => {
  const r = set(bridgeUpdateThemeStyle$, style)
  if (r) {
    return
  }

  const theme = get(internalThemeState.theme$)
  set(internalThemeState.theme$, {
    ...theme,
    style
  })
})

export const updateColorMode$ = command(({ get, set }, colorMode: string) => {
  const r = set(bridgeUpdateColorMode$, colorMode)
  if (r) {
    return
  }

  const theme = get(internalThemeState.theme$)
  set(internalThemeState.theme$, {
    ...theme,
    colorMode
  })
})