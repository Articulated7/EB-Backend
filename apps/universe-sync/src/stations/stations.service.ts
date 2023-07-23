import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { PrismaService } from 'libs/prisma.service'

@Injectable()
@Processor('universe-stations')
export class StationsService extends WorkerHost {
  private readonly logger = new Logger('StationsService')
  @Inject(PrismaService) private prisma: PrismaService

  async process(job: Job<any, any, string>): Promise<any> {
    try {
    } catch (e) {
      this.logger.error(e)
      return { error: e }
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
