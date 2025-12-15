import { command, type Store } from 'ccstate'
import { StoreProvider } from 'ccstate-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CurrentPage } from './CurrentPage'
import './index.css'
import { initRoutes$ } from './infra/router/navigate'
import { Toaster } from './ui-components/Toaster'
import { ThemeContainer } from './infra/theme/ThemeContainer'
import { bootstrap$ } from './bootstrap'

const renderApp$ = command(async ({ set }, store: Store, _injected?: unknown) => {
  const rootController = new AbortController()
  set(bootstrap$, _injected, rootController.signal)

  createRoot(document.getElementById('bundler-root')!).render(
    <StrictMode>
      <StoreProvider value={store}>
        <ThemeContainer>
          <CurrentPage />
          <Toaster />
        </ThemeContainer>
      </StoreProvider>
    </StrictMode>,
  )

  await set(initRoutes$, rootController.signal)
})

export const renderApp = async (store: Store, _injected?: unknown) => {
  await store.set(renderApp$, store, _injected)
}
