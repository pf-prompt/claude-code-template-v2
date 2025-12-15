import { defineConfig, loadEnv, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import { configDotenv } from 'dotenv'

configDotenv()

const workingAppPlugins: PluginOption[] = [
  sentryVitePlugin({
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    authToken: process.env.SENTRY_CI_AUTH_TOKEN,
    telemetry: false,
  })
]

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const viteEnv = loadEnv(mode, process.cwd(), 'VITE_')

  // Create define object to inject VITE_ prefixed env vars into process.env
  const define: Record<string, string> = {}
  define['process.env.VITE_DEBUG'] = '""'
  Object.keys(viteEnv).forEach((key) => {
    define[`process.env.${key}`] = JSON.stringify(viteEnv[key])
  })
  const isPrototype = process.env.VITE_USE_PROTOTYPE === 'true'

  return {
    publicDir: 'frontend/public',
    plugins: [react(), tailwindcss(), ...(!isPrototype ? workingAppPlugins : [])],
    base: '/',
    build: {
      outDir: 'dist',
      sourcemap: !isPrototype,
      assetsDir: 'assets',
    },
    define,
  }
})
