import { regressionTests } from './regressionTests'

// Console interception system - must be defined BEFORE any imports
interface LogEntry {
  level: 'log' | 'info' | 'warn' | 'error' | 'debug'
  message: string
  timestamp: string
  args: unknown[]
}

class ConsoleInterceptor {
  private logs: LogEntry[] = []
  private originalConsole: {
    log: typeof console.log
    info: typeof console.info
    warn: typeof console.warn
    error: typeof console.error
    debug: typeof console.debug
  }

  constructor() {
    this.originalConsole = {
      log: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
      debug: console.debug
    }
  }

  start() {
    this.logs = []

    console.log = (...args: unknown[]) => {
      this.captureLog('log', args)
    }

    console.info = (...args: unknown[]) => {
      this.captureLog('info', args)
    }

    console.warn = (...args: unknown[]) => {
      this.captureLog('warn', args)
    }

    console.error = (...args: unknown[]) => {
      this.captureLog('error', args)
    }

    console.debug = (...args: unknown[]) => {
      this.captureLog('debug', args)
    }
  }

  stop() {
    console.log = this.originalConsole.log
    console.info = this.originalConsole.info
    console.warn = this.originalConsole.warn
    console.error = this.originalConsole.error
    console.debug = this.originalConsole.debug
  }

  private captureLog(level: LogEntry['level'], args: unknown[]) {
    const message = args.map(arg =>
      typeof arg === 'string' ? arg : JSON.stringify(arg)
    ).join(' ')

    this.logs.push({
      level,
      message,
      timestamp: new Date().toISOString(),
      args
    })
  }

  getLogs(): LogEntry[] {
    return [...this.logs]
  }

  clear() {
    this.logs = []
  }
}


// Utility function: create JSON response
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

// Main HTTP handler for GET requests
export async function regressionTestHandler(request: Request): Promise<Response> {
  // Handle OPTIONS request (CORS preflight)
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  if (request.method !== 'GET') {
    return jsonResponse({
      error: 'Method not allowed',
      allowedMethods: ['GET']
    }, 405)
  }

  // Create global console interceptor instance
  const globalConsoleInterceptor = new ConsoleInterceptor()

  // Start intercepting immediately, before any imports
  globalConsoleInterceptor.start()

  // Clear any previous logs and continue using global interceptor
  globalConsoleInterceptor.clear()

  // Note: No authentication required for regression tests
  console.log('Processing regression test request')

  const url = new URL(request.url)
  const module = url.searchParams.get('module') || 'all'
  const test = url.searchParams.get('test') || 'all'

  const result = await regressionTests({
    module,
    test,
  })
  const capturedLogs = globalConsoleInterceptor.getLogs()
  return jsonResponse({
    ...result,
    logs: capturedLogs.reverse(),
  }, result.success ? 200 : 500)
}