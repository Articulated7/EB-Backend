import { InjectQueue } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { Queue } from 'bullmq'
import { DateTime } from 'luxon'
import { InjectRepository } from '@nestjs/typeorm'
import { SyncStatus } from 'libs/database/entity/SyncStatus'
import { Repository } from 'typeorm'

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name)
  constructor(
    @InjectQueue('status') private statusQueue: Queue,
    @InjectRepository(SyncStatus)
    private syncStatusRepository: Repository<SyncStatus>
  ) {}

  @Cron('*/30 * * * * *', {
    name: 'status',
    timeZone: 'UTC'
  })
  async scheduleStatusSync() {
    this.logger.debug('creating status job')
    await this.syncStatusRepository.upsert(
      {
        name: 'status',
        interval: 30,
        lastSync: DateTime.now().toUTC().toISO(),
        nextSync: DateTime.now().toUTC().plus({ seconds: 30 }).toISO()
      },
      ['name']
    )
    await this.statusQueue.add(
      'status',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: true, removeOnFail: 5 }
    )
  }
}
