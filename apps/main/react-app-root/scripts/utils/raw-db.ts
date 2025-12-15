import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

/**
 * Raw database instance for scripts.
 *
 * Unlike `backend/infra/db.ts`, this doesn't require AsyncLocalStorage context,
 * making it suitable for:
 * - CLI scripts
 * - Database migrations
 * - Data seeding
 * - Raw SQL operations
 *
 * Usage:
 * ```ts
 * import { getRowDB } from './utils/raw-db'
 * import { sql } from 'drizzle-orm'
 *
 * // Execute raw SQL
 * await getRowDB().execute(sql`SELECT * FROM users`)
 *
 * // Connection will be automatically closed when script exits
 * ```
 */
let dbInstance: ReturnType<typeof drizzle> | null = null

/**
 * Get the standalone database instance.
 * Creates a new connection on first call, then reuses it.
 * Connection will be automatically closed when the process exits.
 */
export function db() {
  if (!dbInstance) {
    const connectionString = process.env.PARAFLOW_DRIZZLE_URL
    if (!connectionString) {
      throw new Error('PARAFLOW_DRIZZLE_URL is not defined in environment variables')
    }

    // Disable prepared statements for better compatibility
    const client = postgres(connectionString, { prepare: false })
    dbInstance = drizzle(client)
  }

  return dbInstance
}
