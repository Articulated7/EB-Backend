import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: Number(process.env.DATABASE_PORT) ?? 5432,
  username: process.env.DATABASE_USERNAME ?? 'postgres',
  password: process.env.DATABASE_PASSWORD ?? 'postgres',
  database: process.env.DATABASE_NAME ?? 'postgres',
  synchronize: true,
  logging: false,
  entities: ['libs/database/entity/**/*.ts'],
  migrations: ['libs/database/migration/**/*.ts'],
  subscribers: [],
  migrationsTableName: 'migrations_typeorm'
})
