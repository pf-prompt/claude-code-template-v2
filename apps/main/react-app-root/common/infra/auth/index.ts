/**
 * Auth module - centralized authentication
 */

// Auth commands namespace (with side effects)
export { authCommand } from './authCommand'

// Auth state (no side effects)
export {
  authClientMode$,
  authSessionDirty$,
  authSession$,
  currentUser$,
} from './authState'

// Server-side utilities
export { getSessionByToken } from './betterAuthClient'

// Type definitions
export type {
  SignUpParams,
  SignInParams,
  SocialSignInParams,
  User,
  Session,
  AuthResponse,
} from './types'
