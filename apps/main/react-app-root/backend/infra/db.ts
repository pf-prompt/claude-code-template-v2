import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { state, Store } from 'ccstate'
import postgres from 'postgres'
import * as schema from '../../common/schema/schema'
import { backendContext } from './getContext'

type TxType = {
  insert: ReturnType<typeof drizzle>['insert'],
  select: ReturnType<typeof drizzle>['select'],
  delete: ReturnType<typeof drizzle>['delete'],
  update: ReturnType<typeof drizzle>['update']
}

const postgresJsDatabase$ = state<PostgresJsDatabase<typeof schema> | null>(null, {debugLabel: 'PostgresJsDatabase'}) 
const postgresJsDatabaseTransaction$ = state<TxType | null>(null, {debugLabel: 'Tx'}) 

// Get or create database connection for current request
function getDbConnection(store: Store) {
  let dbInstance = store.get(postgresJsDatabase$)
  if (!dbInstance) {
    // Create new connection for this request
    const connectionString = process.env.PARAFLOW_DRIZZLE_URL
    if (!connectionString) {
      throw new Error('PARAFLOW_DRIZZLE_URL is not defined in environment variables')
    }

    // Disable prepared statements for better compatibility
    const client = postgres(connectionString, { prepare: false })
    dbInstance = drizzle(client, { schema })

    store.set(postgresJsDatabase$, dbInstance)
  }

  return dbInstance
}

export function db(): TxType {
  const store = backendContext.getStore()
  if (!store) {
    throw new Error('Cannot access database outside of request context')
  }

  const tx = store.get(postgresJsDatabaseTransaction$)
  if (tx) {
    return tx
  }
  return getDbConnection(store)
}

export function runInTransaction() {
  const store = backendContext.getStore()
  if (!store) {
    throw new Error('Cannot access database outside of request context')
  }

  let resolve = () => {}
  let reject: (((reason?: unknown) => void)) = () => {}
  const finishTxPromise = new Promise<void>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })
  getDbConnection(store).transaction(async (tx) => {
    store.set(postgresJsDatabaseTransaction$, tx)
    await finishTxPromise
  }).finally(() => {
    store.set(postgresJsDatabaseTransaction$, null)
  })
  return {
    resolve,
    reject
  }
}