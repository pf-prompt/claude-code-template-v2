import { command, state } from 'ccstate'

type ThemeOnChangeCallback = (type: string, value: string) => void
const onChangeHandler$ = state<{ callback: ThemeOnChangeCallback } | null>(null)

export const setThemeChangedHandler$ = command(({ set }, callback: ThemeOnChangeCallback) => {
  set(onChangeHandler$, {callback})
})

export const bridgeUpdateThemeStyle$ = command(({ get }, style: string) => {
  const handler = get(onChangeHandler$)
  if (handler) {
    handler.callback('theme', style)
    return true
  }
  return false
})

export const bridgeUpdateColorMode$ = command(({ get }, colorMode: string) => {
  const handler = get(onChangeHandler$)
  if (handler) {
    handler.callback('colorMode', colorMode)
    return true
  }
  return false
})