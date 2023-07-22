import { InjectQueue } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { Queue } from 'bullmq'
import { PrismaService } from 'libs/prisma.service'
import { DateTime } from 'luxon'

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name)
  constructor(
    private prisma: PrismaService,
    @InjectQueue('status') private statusQueue: Queue
  ) {}

  @Cron('*/30 * * * * *', {
    name: 'status',
    timeZone: 'UTC'
  })
  async handleCron() {
    this.logger.debug('creating status job')
    await this.statusQueue.add(
      'status',
      { submitTime: DateTime.now().toUTC().toISO() },
      { removeOnComplete: 1, removeOnFail: 5 }
    )
  }
}
