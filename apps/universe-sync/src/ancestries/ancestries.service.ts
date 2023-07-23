import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { PrismaService } from 'libs/prisma.service'

@Injectable()
@Processor('universe-ancestries')
export class AncestriesService extends WorkerHost {
  private readonly logger = new Logger('AncestriesService')
  @Inject(PrismaService) private prisma: PrismaService

  async process(job: Job<any, any, string>): Promise<any> {
    const client = new EVEClient()

    const res = await client.universe.getUniverseAncestries({})

    res.forEach(async (ancestry) => {
      await this.prisma.ancestry.upsert({
        where: { Id: ancestry.id },
        update: {
          BloodlineId: ancestry.bloodline_id,
          Description: ancestry.description,
          Name: ancestry.name,
          ShortDescription: ancestry.short_description,
          IconId: ancestry.icon_id
        },
        create: {
          Id: ancestry.id,
          BloodlineId: ancestry.bloodline_id,
          Description: ancestry.description,
          Name: ancestry.name,
          ShortDescription: ancestry.short_description,
          IconId: ancestry.icon_id
        }
      })
    })
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
