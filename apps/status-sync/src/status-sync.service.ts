import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { DateTime } from 'luxon'
import { InjectRepository } from '@nestjs/typeorm'
import { Status } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('status')
export class StatusSyncConsumer extends WorkerHost {
  private readonly logger = new Logger('StatusSyncConsumer')
  @InjectRepository(Status) private statusRepository: Repository<Status>

  async process(job: Job<any, any, string>) {
    try {
      const now = DateTime.now().toUTC()
      const client = new EVEClient()

      if (DateTime.fromISO(job.data.submitTime) < now.minus({ seconds: 25 })) {
        this.logger.warn('job is too old')
        return
      }

      const res = await client.status.getStatus({})

      await this.statusRepository.save([
        {
          timestamp: new Date().toISOString(),
          players: Number(res.players),
          serverVersion: Number(res.server_version),
          startTime: res.start_time,
          vip: res.vip ? res.vip : false
        }
      ])
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
