import { state } from 'ccstate'

const pathname$ = state('/')

export const sharedLocationState = {
  pathname$,
}