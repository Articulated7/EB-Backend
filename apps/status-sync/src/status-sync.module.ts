import { Module } from '@nestjs/common'
import { StatusSyncConsumer } from './status-sync.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BullModule } from '@nestjs/bullmq'
import { statusQueue } from 'libs/queues'
import { Status } from 'libs/database'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: Number(process.env.DATABASE_PORT) ?? 5432,
      username: process.env.DATABASE_USERNAME ?? 'postgres',
      password: process.env.DATABASE_PASSWORD ?? 'postgres',
      database: process.env.DATABASE_NAME ?? 'postgres',
      autoLoadEntities: true,
      synchronize: false,
      cache: {
        type: 'ioredis',
        options: {
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT) || 6379,
          db: 2
        }
      }
    }),
    TypeOrmModule.forFeature([Status]),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379
      }
    }),
    statusQueue
  ],
  controllers: [],
  providers: [StatusSyncConsumer]
})
export class StatusSyncModule {}
