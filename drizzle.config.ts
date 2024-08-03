import '@/db/env-config'
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: './src/db/drizzle.ts',
  out: './drizzle.config.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
})