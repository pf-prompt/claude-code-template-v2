import { command } from 'ccstate'
import { testHooks } from '../common/infra/testRegistry'
import './httpHandler'
import { runInTransaction } from './infra/db'
import { DrizzleError } from 'drizzle-orm'

export function setupTestHooks() {
  testHooks.beforeTest = command(async () => {
    const finishTx = runInTransaction()
    return () => {
      finishTx.reject(new DrizzleError({message:'Rollback'}))
    }
  })
}