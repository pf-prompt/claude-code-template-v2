import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  schema: './common/schema/schema.ts',
  out: './common/schema',
  dialect: 'postgresql',
  introspect: {
    casing: 'preserve'
  },
  dbCredentials: {
    url: process.env.PARAFLOW_DRIZZLE_URL || '',
  }
})