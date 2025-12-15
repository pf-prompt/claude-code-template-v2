import * as React from 'react'

export function setupBrowserMock() {
  // Mock browser globals for Node.js environment
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Mock
  const anyGlobalThis = globalThis as any

  anyGlobalThis.history = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Mock
    pushState: (_x: any, _y: any, pathname: string) => {
      anyGlobalThis.location.pathname = pathname
    },
  }

  anyGlobalThis.location = {
    pathname: '/',
    href: 'http://localhost:3000',
    origin: 'http://localhost:3000',
    search: '',
    hash: '',
  }

  anyGlobalThis.React = React
}