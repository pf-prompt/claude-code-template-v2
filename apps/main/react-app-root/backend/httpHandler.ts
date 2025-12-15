import './apiImpl'
import { propagationContextFromHeaders } from '@sentry/core'
import * as Sentry from '@sentry/react'
import { createStore } from 'ccstate'
import { apiRegistry, HTTPError } from '../common/infra/apiRegistry'
import { backendContext } from './infra/getContext'
import { setAsyncContextStrategyToSentry } from './infra/setAsyncContextStrategyToSentry'
import { logger } from '../common/infra/log'
import { handleWebhook } from './webhookHandler'
import { currentUserToken$ } from './infra/currentUser'
import { initializeR2BucketsFromEnv } from './infra/r2/manager'
import type { Cloudflare } from '@cloudflare/workers-types'

const L = logger('httpHandler')

// Main request handler - Web standard format
export async function httpHandler(request: Request, env?: Cloudflare.Env): Promise<Response> {
  // Handle OPTIONS request (CORS preflight)
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    })
  }

  initializeR2BucketsFromEnv(env)
  setAsyncContextStrategyToSentry()
  return await Sentry.withIsolationScope(async () => {
    const sentryTrace = request.headers.get('sentry-trace')
    const baggage = request.headers.get('baggage')
    if (sentryTrace && baggage) {
      const propagationContext = propagationContextFromHeaders(sentryTrace, baggage)
      Sentry.getCurrentScope().setPropagationContext(propagationContext)
    }
    return await handleGetAndPost(request)
  })
}

async function handleGetAndPost(request: Request): Promise<Response> {
  const store = createStore()
  return await backendContext.run(store, async () => {
    const authHeader = request.headers.get('Authorization')
    Sentry.init({
      dsn: process.env.VITE_SENTRY_DSN,
      sendDefaultPii: true,
      ignoreErrors: ['Failed to fetch.*', 'Http error.*'],
      tracesSampleRate: 1.0,
      enableLogs: true,
    })
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      store.set(currentUserToken$, '')
    } else {
      const token = authHeader.substring(7) // Remove 'Bearer ' prefix
      store.set(currentUserToken$, token)
    }
    try {
      const webhookResp = await handleWebhook(request)
      if (webhookResp) {
        return webhookResp
      }
      if (request.method === 'GET') {
        return await handleGet(request)
      } else if (request.method === 'POST') {
        return await handlePost(request)
      } else {
        return jsonResponse({
          error: 'Method not allowed',
          allowedMethods: ['GET', 'POST']
        }, 405)
      }
    } catch (e) {
      if (e instanceof HTTPError) {
        return jsonResponse({
          error: e.message
        }, e.status)
      }
      Sentry.captureException(e, {
        captureContext: {
          tags: {
            'httpMethod': request.method,
            'httpPath': new URL(request.url).pathname
          },
        }
      })
      return jsonResponse({
        error: 'Internal server error'
      }, 500)
    }
  })
}

// GET handler
async function handleGet(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const apiName = url.searchParams.get('api_name') || ''
  Sentry.addBreadcrumb({
    category: 'api',
    message: `handle get api ${request.url}, SB_EXECUTION_ID: ${process.env['SB_EXECUTION_ID']}`,
    level: 'info'
  })
  Sentry.setTag('apiName', apiName || '')
  if (!apiName) {
    throw new HTTPError(405, 'querystring missing "api_name" argument')
  }

  const apiReq: Record<string, string> = {}
  // Convert URLSearchParams to plain object
  for (const [key, value] of url.searchParams.entries()) {
    if (key === 'api_name') {
      continue
    }
    apiReq[key] = value
  }
  return await Sentry.startSpan({
    name: apiName,
    op: 'handle.api.get'
  }, async ()=> {
    L.info(L.fmt`handle.api.get ${apiName}, SB_EXECUTION_ID: ${process.env['SB_EXECUTION_ID']}`)
    const apiResp = await apiRegistry.handleGetRequest(apiName, apiReq)
    return jsonResponse(apiResp)
  })
}

// POST handler
async function handlePost(request: Request): Promise<Response> {
  const apiReqText = await request.text()
  Sentry.addBreadcrumb({
    category: 'api',
    message: `handle post api ${apiReqText}, SB_EXECUTION_ID: ${process.env['SB_EXECUTION_ID']}`,
    level: 'info'
  })
  const apiReq = JSON.parse(apiReqText)
  const apiName = apiReq['api_name']
  Sentry.setTag('apiName', apiName || '')
  if (!apiName) {
    throw new HTTPError(405, 'post body missing "api_name" field')
  }
  delete apiReq['api_name']
  
  return await Sentry.startSpan({
    name: apiName,
    op: 'handle.api.post'
  }, async ()=> {
    L.info(L.fmt`handle.api.post ${apiName}, SB_EXECUTION_ID: ${process.env['SB_EXECUTION_ID']}`)
    const apiResp = await apiRegistry.handlePostRequest(apiName as string, apiReq)
    return jsonResponse(apiResp)
  })
}

function jsonResponse(data: unknown, status: number = 200, headers: HeadersInit = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      ...headers,
    },
  })
}