import { createStore } from 'ccstate'
import * as fs from 'fs'
import * as prototypeReactState from '../frontend/prototypeReactState'
import { sleep } from './utils/sleep'
import { checkCanBeJsonStringify } from './utils/object'
import { setupBrowserMock } from './utils/browser-mock'
import { navigateInReact$ } from '../frontend/infra/router/navigate'
import { bootstrap$ } from '../frontend/bootstrap'

async function main() {
  setupBrowserMock()

  if (process.argv.length <= 2) {
    throw new Error('missing arguments')
  }

  const [inputScriptPath, outputJsonPath] = process.argv.slice(-2)
  const { run } = await import(inputScriptPath)

  const store = createStore()
  await store.set(bootstrap$, undefined, new AbortController().signal)
  store.set(navigateInReact$, '/')
  await sleep(100)
  await run(store)
  await sleep(100)

  const reactState = await prototypeReactState.takeAllStateSnapshot(store.get)
  checkCanBeJsonStringify(reactState, [])

  if (!reactState.stateTreeRoot.sharedLocationState) {
    throw Error('stateTreeRoot.sharedLocationState not found')
  }
  fs.writeFileSync(outputJsonPath, JSON.stringify(reactState))
}
main()
