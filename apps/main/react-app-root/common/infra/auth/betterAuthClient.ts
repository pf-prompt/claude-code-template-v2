import { createAuthClient } from 'better-auth/react'
import { oneTimeTokenClient } from 'better-auth/client/plugins'
import { saveToken, getToken } from './storage'
import type { VerifyTokenResponse } from './types'

type BetterAuthClient = ReturnType<typeof createAuthClient> & {
  oneTimeToken: {
    verify: (params: { token: string }) => Promise<VerifyTokenResponse>
  }
}

/**
 * Better-auth client instance (singleton)
 * Only used when authClientMode$ is 'betterAuth'
 */
let betterAuthClientInstance: BetterAuthClient | null = null

const baseURL = 'https://auth.paraflow.app/api/auth'

export function getBetterAuthClient(): BetterAuthClient {
  if (!betterAuthClientInstance) {
    if (!process.env.VITE_AUTH_APP_ID) {
      throw new Error('process.env.VITE_AUTH_APP_ID is not set')
    }

    betterAuthClientInstance = createAuthClient({
      baseURL: baseURL,
      plugins: [oneTimeTokenClient()],
      fetchOptions: {
        credentials: 'omit',
        onSuccess: (ctx) => {
          const token = ctx.response.headers.get('set-auth-token')
          if (token) {
            saveToken(token)
          }
        },
        auth: {
          type: 'Bearer',
          token: () => getToken() || '',
        },
        headers: {
          'x-app-id': process.env.VITE_AUTH_APP_ID!,
        },
      },
    }) as BetterAuthClient
  }

  return betterAuthClientInstance
}

/**
 * Get session by token (server-side use)
 */
export async function getSessionByToken(token: string) {
  if (!process.env.PARAFLOW_APP_ID) {
    throw new Error('process.env.PARAFLOW_APP_ID is not set')
  }

  try {
    const response = await fetch(`${baseURL}/get-session`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'x-app-id': process.env.PARAFLOW_APP_ID!,
        'Content-Type': 'application/json',
      },
    })

    const data = response.ok ? await response.json() : null

    return {
      status: response.status,
      message: response.statusText,
      data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error instanceof Error ? error.message : 'Network error',
      data: null,
    }
  }
}
