import { useGet } from 'ccstate-react'
import { page$ } from './infra/router/currentPage'

export function CurrentPage() {
  return useGet(page$)
}