// the client to call backendApi
import * as Sentry from '@sentry/react'
import { computed, state, type Getter } from 'ccstate'
import { apiRegistry } from '../../common/infra/apiRegistry'
import type { AllApiTypes } from '../../common/backendApi'
import { authSession$ } from '../../common/infra/auth/authState'

export const baseUrl$ = state(`${process.env.VITE_DOMAIN || window.location.origin}/api`)

export class ApiClient<T> {

  private getFromStore: Getter

  constructor(getFromStore: Getter) {
    this.getFromStore = getFromStore
  }

  public async getApi<R extends keyof T>(
    apiName: T[R] extends { method: 'GET' } ? R : never,
    params: T[R] extends { request: infer Req } ? Req : never
  ): Promise<T[R] extends { response: infer Res } ? Res : never> {
    if (apiRegistry.useDirectRoute) {
      return apiRegistry.handleGetRequest(apiName as string, params)
    } else {
      return Sentry.startSpan({ name: apiName as string, op: 'call.api.get', parentSpan: Sentry.getActiveSpan() }, async () => {
        const baseUrl = this.getFromStore(baseUrl$)
        // Remote invocation implementation
        const url = new URL(baseUrl)
        url.searchParams.set('api_name', apiName as string)

        // Add parameters to query string
        if (params && typeof params === 'object') {
          Object.entries(params as Record<string, unknown>).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
              url.searchParams.set(key, String(value))
            }
          })
        }

        const headers: HeadersInit = {
          'Content-Type': 'application/json',
        }
        const traceData = Sentry.getTraceData()
        if (traceData['sentry-trace']) {
          headers['sentry-trace'] = traceData['sentry-trace']
        }
        if (traceData['baggage']) {
          headers['baggage'] = traceData['baggage']
        }

        const session = await this.getFromStore(authSession$)
        if (session?.data?.session?.token) {
          headers['Authorization'] = `Bearer ${session.data.session.token}`
        }

        const response = await fetch(url.toString(), {
          method: 'GET',
          headers
        })

        if (response.status === 401) {
          window.location.href = '/login'
          return
        }

        const data = await response.json()
        return {...data, __is_from_server: true}
      })
    }
  }

  public async postApi<R extends keyof T>(
    apiName: T[R] extends { method: 'POST' } ? R : never,
    params: T[R] extends { request: infer Req } ? Req : never
  ): Promise<T[R] extends { response: infer Res } ? Res : never> {
    if (apiRegistry.useDirectRoute) {
      return apiRegistry.handlePostRequest(apiName as string, params)
    } else {
      return Sentry.startSpan({ name: apiName as string, op: 'call.api.post', parentSpan: Sentry.getActiveSpan() }, async () => {
        // Remote invocation implementation
        const requestBody = {
          api_name: apiName,
          ...(params as Record<string, unknown>)
        }
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
        }
        const traceData = Sentry.getTraceData()
        if (traceData['sentry-trace']) {
          headers['sentry-trace'] = traceData['sentry-trace']
        }
        if (traceData['baggage']) {
          headers['baggage'] = traceData['baggage']
        }

        const session = await this.getFromStore(authSession$)
        if (session?.data?.session?.token) {
          headers['Authorization'] = `Bearer ${session.data.session.token}`
        }

        const baseUrl = this.getFromStore(baseUrl$)
        const response = await fetch(baseUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify(requestBody)
        })

        if (response.status === 401) {
          window.location.href = '/login'
          return
        }

        const data = await response.json()
        return data
      })
    }
  }
}

export const apiClient$ = computed((get) => {
  return new ApiClient<AllApiTypes>(get)
})