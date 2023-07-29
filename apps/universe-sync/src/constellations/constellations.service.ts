import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { PrismaService } from 'libs/prisma.service'

@Injectable()
@Processor('universe-factions')
export class ConstellationsService extends WorkerHost {
  private readonly logger = new Logger('ConstellationsService')
  @Inject(PrismaService) private prisma: PrismaService

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
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
