import { command } from 'ccstate'
import { getBetterAuthClient } from './betterAuthClient'
import { removeToken, saveRedirectURL, saveToken, getAndClearRedirectURL } from './storage'
import { authClientMode$, authSessionDirty$ } from './authState'
import type { SignUpParams, SignInParams, SocialSignInParams, User, AuthResponse } from './types'

/**
 * Fake user storage for fake mode
 */
let fakeUser: User | null = null

/**
 * Auth commands namespace
 * All auth-related commands with side effects
 */
export const authCommand = {
  /**
   * Enable fake auth mode
   */
  enableFakeMode$: command(({ set }, initialUser?: User) => {
    set(authClientMode$, 'fake')
    fakeUser = initialUser || null
    set(authSessionDirty$, (prev) => prev + 1)
  }),

  /**
   * Sign out (has side effects)
   */
  signOut$: command(async ({ get, set }) => {
    const mode = get(authClientMode$)

    if (mode === 'fake') {
      // Fake mode
      fakeUser = null
    } else {
      // BetterAuth mode
      const client = getBetterAuthClient()
      try {
        await client.signOut()
      } finally {
        removeToken()
      }
    }

    set(authSessionDirty$, (prev) => prev + 1)
  }),

  /**
   * Sign up with email and password (has side effects)
   */
  signUp$: command(async ({ get, set }, params: SignUpParams): Promise<AuthResponse> => {
    const mode = get(authClientMode$)

    let response: AuthResponse

    if (mode === 'fake') {
      // Fake mode
      fakeUser = {
        id: `fake-${Date.now()}`,
        email: params.email,
        name: params.name,
        image: `https://ui-avatars.com/api/?name=${encodeURIComponent(params.name)}&background=6366f1&color=fff`,
      }
      response = { data: { user: fakeUser, token: 'fake-token' }, error: null }
    } else {
      // BetterAuth mode
      const client = getBetterAuthClient()
      response = await client.signUp.email(params)
    }

    if (!response?.error) {
      set(authSessionDirty$, (prev) => prev + 1)
    }

    return response
  }),

  /**
   * Sign in with email and password (has side effects)
   */
  signInWithPassword$: command(async ({ get, set }, params: SignInParams): Promise<AuthResponse> => {
    const mode = get(authClientMode$)

    let response: AuthResponse

    if (mode === 'fake') {
      // Fake mode
      fakeUser = {
        id: `fake-${Date.now()}`,
        email: params.email,
        name: params.email.split('@')[0],
        image: `https://ui-avatars.com/api/?name=${encodeURIComponent(params.email)}&background=6366f1&color=fff`,
      }
      response = { data: { user: fakeUser, token: 'fake-token' }, error: null }
    } else {
      // BetterAuth mode
      const client = getBetterAuthClient()
      response = await client.signIn.email(params)
    }

    // Trigger session refresh
    if (!response?.error) {
      set(authSessionDirty$, (prev) => prev + 1)
    }

    return response
  }),

  /**
   * Sign in with OAuth provider (has side effects)
   */
  signInWithOAuth$: command(async ({ get }, params: SocialSignInParams): Promise<void> => {
    const mode = get(authClientMode$)

    if (mode === 'fake') {
      // Fake mode - OAuth not supported
      throw new Error('OAuth is not supported in fake mode')
    }

    // BetterAuth mode
    if (typeof window === 'undefined') {
      throw new Error('signInWithOAuth can only be called in browser context')
    }

    if (params.redirectURL) {
      saveRedirectURL(params.redirectURL)
    }

    const client = getBetterAuthClient()
    await client.signIn.social({
      provider: params.provider,
      callbackURL: window.location.origin + '/auth/callback',
    })
  }),

  /**
   * Perform OAuth callback verification
   * Extracts code from URL, verifies it, saves token, and redirects
   */
  performVerification$: command(async ({ get, set }) => {
    const mode = get(authClientMode$)

    if (mode === 'fake') {
      return
    }

    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    if (!code) {
      return
    }

    const client = getBetterAuthClient()
    const response = await client.oneTimeToken.verify({ token: code })

    if (response.error) {
      return
    }

    const authToken = response.data?.session?.token
    if (authToken) {
      saveToken(authToken)
    }

    set(authSessionDirty$, (prev) => prev + 1)

    // Get redirect URL from session storage and redirect
    const redirectURL = getAndClearRedirectURL()
    window.location.href = redirectURL
  }),
}

/**
 * Helper function to get fake user (for state to access)
 */
export function getFakeUser(): User | null {
  return fakeUser
}
