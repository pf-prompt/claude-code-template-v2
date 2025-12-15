import { command, type Command } from 'ccstate'
import { detach } from './promise'

export function onRef<T extends HTMLElement | SVGSVGElement>(
  command$: Command<void | Promise<void>, [T, AbortSignal]>,
) {
  return command(({ set }, el: T | null) => {
    if (!el) {
      return
    }

    const ctrl = new AbortController()

    detach(set(command$, el, ctrl.signal), 'DomCallback', 'onRef')

    return () => {
      ctrl.abort()
    }
  })
}
