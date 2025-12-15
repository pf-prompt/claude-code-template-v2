import type { Computed, State } from 'ccstate'

export function isComputed(obj: unknown): obj is Computed<unknown> {
  const maybeComputed = obj as (Computed<unknown> | undefined)
  if (maybeComputed?.read && typeof maybeComputed.read === 'function') {
    return true
  }
  return false
}

export function isState(obj: unknown): obj is State<unknown> {
  const maybeState = obj as (State<unknown> | undefined)
  if (maybeState?.id !== undefined && `S${maybeState.id}` === maybeState.toString()) {
    return true
  }
  return false
}