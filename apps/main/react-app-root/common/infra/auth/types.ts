// User info from better-auth
export interface User {
  id: string
  email: string
  name: string
  image?: string | null
  createdAt?: Date
  updatedAt?: Date
  emailVerified?: boolean
}

// Session detail from better-auth
export interface SessionDetail {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  expiresAt: Date
  token: string
  ipAddress?: string | null
  userAgent?: string | null
}

// Full session data (with detailed user and session)
export interface Session {
  user: User
  session: SessionDetail
}

export interface SignUpParams {
  email: string
  password: string
  name: string
}

export interface SignInParams {
  email: string
  password: string
}

export interface SocialSignInParams {
  provider: 'google'
  redirectURL?: string
}
export interface AuthError {
  message?: string
  code?: string
  status?: number
}

// Response from signIn/signUp (simpler, just user + optional token)
export interface AuthResponse {
  data: {
    user: User
    token?: string | null
  } | null
  error: AuthError | null
}

export interface VerifyTokenResponse {
  data: {
    session: SessionDetail
  } | null
  error: AuthError | null
}