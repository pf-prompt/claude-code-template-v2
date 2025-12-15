import * as Sentry from '@sentry/react'
import type { RoutePath } from './router/RoutePath'

let pageLoadSpan: Sentry.Span | undefined
const client = Sentry.init({
  ignoreSpans: [{
    op: 'resource.script'
  }, {
    op: 'resource.other'
  }],
  dsn: process.env.VITE_SENTRY_DSN,
  sendDefaultPii: true,
  ignoreErrors: ['Failed to fetch.*', 'Http error.*'],
  tracesSampleRate: 1.0,
  integrations: [Sentry.browserTracingIntegration({
    instrumentNavigation: false,
    instrumentPageLoad: false,
    traceFetch: false
  })],
  enableLogs: true,
})
if (client && typeof window !== 'undefined') {
  // We start the pageload span as early as possible!
  pageLoadSpan = Sentry.startBrowserTracingPageLoadSpan(client, {
    name: window.location.pathname,
    attributes: {
      [Sentry.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'url',
    },
  })
}

export function afterNavigateReportToSentry(route: RoutePath) {
  if (!client) {
    return
  }
  if (pageLoadSpan) {
    pageLoadSpan.updateName(route)
    pageLoadSpan.setAttribute(
      Sentry.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE,
      'route',
    )
    pageLoadSpan = undefined
  } else {
    Sentry.startBrowserTracingNavigationSpan(client, {
      op: 'navigation',
      name: route, // or what the name of the span should be
      attributes: {
        [Sentry.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'route',
      },
    })
  }
}
