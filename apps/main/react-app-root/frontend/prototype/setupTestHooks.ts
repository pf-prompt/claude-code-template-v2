import { command } from 'ccstate'
import { testHooks } from '../../common/infra/testRegistry'
import './apiImpl'
import { apiRegistry } from '../../common/infra/apiRegistry'

export function setupTestHooks() {
  testHooks.beforeTest = command(async ({get}) => {
    apiRegistry.useDirectRoute = get
    return () => {
    }
  })
}