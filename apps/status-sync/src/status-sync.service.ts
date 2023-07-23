import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { PrismaService } from 'libs/prisma.service'
import { DateTime } from 'luxon'

@Injectable()
@Processor('status')
export class StatusSyncConsumer extends WorkerHost {
  private readonly logger = new Logger('StatusSyncConsumer')
  @Inject(PrismaService) private prisma: PrismaService

  async process(job: Job<any, any, string>) {
    try {
      const now = DateTime.now().toUTC()
      const client = new EVEClient()

      if (DateTime.fromISO(job.data.submitTime) < now.minus({ seconds: 25 })) {
        this.logger.warn('job is too old')
        return
      }

      const res = await client.status.getStatus({})

      await this.prisma.status.create({
        data: {
          Timestamp: new Date().toISOString(),
          Players: res.players,
          ServerVersion: res.server_version,
          StartTime: res.start_time,
          Vip: res.vip ? res.vip : false
        }
      })
    } catch (e) {
      this.logger.error(e)
    }
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    this.logger.log('completed')
  }
  @OnWorkerEvent('failed')
  onFailed() {
    this.logger.log('failed')
  }
}
