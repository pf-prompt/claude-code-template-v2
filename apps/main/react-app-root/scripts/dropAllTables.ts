import { db } from './utils/raw-db'
import { sql } from 'drizzle-orm'


async function dropAllTables(schemaName: string) {
  console.log(`[WARNING] Starting to delete all tables under ${schemaName} schema...`)

  try {
    // Query all tables under specified schema
    const tablesResult = await db().execute(sql`
      SELECT tablename
      FROM pg_tables
      WHERE schemaname = ${schemaName}
      ORDER BY tablename
    `)

    const tables = tablesResult.map((row) => (row as { tablename: string }).tablename)

    if (tables.length === 0) {
      console.log(`[SUCCESS] No tables found under ${schemaName} schema.`)
      return
    }

    console.log(`[INFO] Found ${tables.length} tables under ${schemaName} schema: ${tables.join(', ')}`)

    // Disable foreign key constraint checking (if any)
    await db().execute(sql`SET session_replication_role = replica`)

    // Delete all tables under this schema
    for (const tableName of tables) {
      console.log(`[INFO] Deleting table: ${schemaName}.${tableName}`)
      await db().execute(sql.raw(`DROP TABLE IF EXISTS "${schemaName}"."${tableName}" CASCADE`))
    }

    // Re-enable foreign key constraint checking
    await db().execute(sql`SET session_replication_role = DEFAULT`)

    console.log(`[SUCCESS] All tables under ${schemaName} schema have been successfully deleted!`)

    // Verify deletion result
    const remainingTablesResult = await db().execute(sql`
      SELECT COUNT(*) as count
      FROM pg_tables
      WHERE schemaname = ${schemaName}
    `)

    const remainingCount = remainingTablesResult[0].count
    console.log(`[INFO] Verification result: ${schemaName} schema remaining table count = ${remainingCount}`)

  } catch (error) {
    console.error(`[ERROR] Failed to delete ${schemaName} schema tables:`, error instanceof Error ? error.message : error)
    throw error
  }
}

// Run deletion function - delete two schemas separately
async function main() {
  try {
    // First delete public schema tables
    await dropAllTables('public')

    // Then delete drizzle schema tables
    await dropAllTables('drizzle')

    console.log('[SUCCESS] All schema table deletion completed!')
    process.exit(0)
  } catch (error) {
    console.error('[ERROR] Error during deletion process:', error)
    process.exit(1)
  }
}

main()