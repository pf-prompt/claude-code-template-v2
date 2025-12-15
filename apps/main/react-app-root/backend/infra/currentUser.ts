import { computed, state } from 'ccstate'
import { getSessionByToken } from '../../common/infra/auth/betterAuthClient'
import type { User } from '../../common/infra/auth/types'

export const currentUserToken$ = state('')

export const currentUser$ = computed(async (get): Promise<User | null> => {
  if (!get(currentUserToken$)) return null
  const token = get(currentUserToken$)
  const session = await getSessionByToken(token)
  return session.data?.user ?? null
})