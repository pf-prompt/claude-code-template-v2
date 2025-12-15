import postgres from 'postgres'

async function testConnection() {
  const connectionString = process.env.PARAFLOW_DRIZZLE_URL

  if (!connectionString) {
    console.error('[ERROR] PARAFLOW_DRIZZLE_URL is not defined in .env file')
    console.log('Please add PARAFLOW_DRIZZLE_URL to your .env file')
    console.log('Format: postgresql://user:password@host:5432/database')
    return
  }

  console.log('[INFO] Testing database connection...')
  console.log('Connection string:', connectionString.replace(/:[^:@]+@/, ':***@'))

  try {
    const sql = postgres(connectionString, { prepare: false })

    // Test simple query
    const result = await sql`SELECT version() as version`
    console.log('[SUCCESS] Database connection successful!')
    console.log('PostgreSQL version:', result[0].version)

    // Close connection
    await sql.end()
  } catch (error) {
    console.error('[ERROR] Database connection failed:', error instanceof Error ? error.message : error)
    console.log('\n[INFO] Please check:')
    console.log('1. PARAFLOW_DRIZZLE_URL is correct in .env file')
    console.log('2. Your PostgreSQL server is running')
    console.log('3. Database credentials are valid')
  }
}

testConnection()