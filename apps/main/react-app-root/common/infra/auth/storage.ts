/**
 * Token storage management
 */

const TOKEN_KEY = 'bearer_token'
const REDIRECT_URL_KEY = 'oauth_redirect_url'

/**
 * Save token to local storage
 */
export function saveToken(token: string): void {
  if (typeof window === 'undefined') {
    throw new Error('saveToken can only be called in browser context')
  }
  localStorage.setItem(TOKEN_KEY, token)
}

/**
 * Get token from local storage
 */
export function getToken(): string | null {
  if (typeof window === 'undefined') {
    throw new Error('getToken can only be called in browser context')
  }
  return localStorage.getItem(TOKEN_KEY)
}

/**
 * Remove token from local storage
 */
export function removeToken(): void {
  if (typeof window === 'undefined') {
    throw new Error('removeToken can only be called in browser context')
  }
  localStorage.removeItem(TOKEN_KEY)
}

/**
 * Check if valid token exists
 */
export function hasToken(): boolean {
  return !!getToken()
}

/**
 * Save OAuth redirect URL
 */
export function saveRedirectURL(url: string): void {
  if (typeof window === 'undefined') {
    throw new Error('saveRedirectURL can only be called in browser context')
  }
  sessionStorage.setItem(REDIRECT_URL_KEY, url)
}

/**
 * Get and clear OAuth redirect URL
 */
export function getAndClearRedirectURL(): string {
  if (typeof window === 'undefined') {
    throw new Error('getAndClearRedirectURL can only be called in browser context')
  }
  const url = sessionStorage.getItem(REDIRECT_URL_KEY) || '/'
  sessionStorage.removeItem(REDIRECT_URL_KEY)
  return url
}
