import { Module } from '@nestjs/common'
import { StatusSyncConsumer } from './status-sync.service'
import { PrismaService } from 'libs/prisma.service'
import { BullModule } from '@nestjs/bullmq'
import { statusQueue } from 'libs/queues'

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379
      }
    }),
    statusQueue
  ],
  // controllers: [StatusSyncController],
  providers: [StatusSyncConsumer, PrismaService]
})
export class StatusSyncModule {}
