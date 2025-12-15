import { state, computed } from 'ccstate'
import { getBetterAuthClient } from './betterAuthClient'
import { getFakeUser } from './authCommand'

/**
 * Auth client mode: 'fake' or 'betterAuth'
 */
export const authClientMode$ = state<'fake' | 'betterAuth'>('betterAuth')

/**
 * Dirty flag to trigger auth session refresh
 * Increment this to force re-fetch of session data
 */
export const authSessionDirty$ = state(0)

/**
 * Current auth session (token + user)
 * This is a computed state that fetches session data (no side effects)
 */
export const authSession$ = computed(async (get) => {
  get(authSessionDirty$) // Depend on dirty to trigger refetch
  const mode = get(authClientMode$)

  if (mode === 'fake') {
    // Fake mode
    const fakeUser = getFakeUser()
    if (!fakeUser) {
      return { data: null, error: null }
    }
    const now = new Date()
    return {
      data: {
        user: {
          ...fakeUser,
          name: fakeUser.name || fakeUser.email,
          createdAt: now,
          updatedAt: now,
          emailVerified: true,
        },
        session: {
          id: 'fake-session-id',
          createdAt: now,
          updatedAt: now,
          userId: fakeUser.id,
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          token: 'fake-token',
          ipAddress: null,
          userAgent: null,
        },
      },
      error: null,
    }
  }

  // BetterAuth mode - getSession is read-only, no side effects
  const client = getBetterAuthClient()
  return await client.getSession()
})

/**
 * Current user data
 */
export const currentUser$ = computed(async (get) => {
  const session = await get(authSession$)
  return session?.data?.user
})
