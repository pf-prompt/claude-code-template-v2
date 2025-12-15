import { createStore } from 'ccstate'
import * as fs from 'fs'
import * as prototypeReactState from '../frontend/prototypeReactState'
import { sleep } from './utils/sleep'
import { checkCanBeJsonStringify } from './utils/object'
import { setupBrowserMock } from './utils/browser-mock'
import { bootstrap$ } from '../frontend/bootstrap'
import { routeConfigs$ } from '../frontend/infra/router/routeRegistry'

async function main() {
  setupBrowserMock()

  if (process.argv.length <= 2) {
    throw new Error('missing arguments')
  }

  const [outputJsonPath] = process.argv.slice(-1)

  const store = createStore()

  // Register routes so they are available in the global registry
  await store.set(bootstrap$, undefined, new AbortController().signal)
  await sleep(100)

  const reactState = await prototypeReactState.takeAllStateSnapshot(store.get)
  checkCanBeJsonStringify(reactState, [])

  if (!reactState.stateTreeRoot.sharedLocationState) {
    throw Error('stateTreeRoot.sharedLocationState not found')
  }

  const routeConfigs = store.get(routeConfigs$)
  if (!Array.isArray(routeConfigs)) {
    throw Error('routeConfigs not exists or not an array')
  }

  fs.writeFileSync(outputJsonPath, JSON.stringify({
    reactState,
    pathnames: routeConfigs.map(config => config.path)
  }))
}
main()
