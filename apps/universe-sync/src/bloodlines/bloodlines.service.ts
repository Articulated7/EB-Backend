import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { PrismaService } from 'libs/prisma.service'

@Injectable()
@Processor('universe-bloodlines')
export class BloodlinesService extends WorkerHost {
  private readonly logger = new Logger('AncestriesService')
  @Inject(PrismaService) private prisma: PrismaService

  async process(job: Job<any, any, string>): Promise<any> {
    const client = new EVEClient()

    const res = await client.universe.getUniverseBloodlines({})

    res.forEach(async (bloodline) => {
      await this.prisma.bloodline.upsert({
        where: { BloodlineId: bloodline.bloodline_id },
        update: {
          Charisma: bloodline.charisma,
          CorporationId: bloodline.corporation_id,
          Description: bloodline.description,
          Intelligence: bloodline.intelligence,
          Memory: bloodline.memory,
          Name: bloodline.name,
          Perception: bloodline.perception,
          RaceId: bloodline.race_id,
          ShipTypeId: bloodline.ship_type_id,
          Willpower: bloodline.willpower
        },
        create: {
          BloodlineId: bloodline.bloodline_id,
          Charisma: bloodline.charisma,
          CorporationId: bloodline.corporation_id,
          Description: bloodline.description,
          Intelligence: bloodline.intelligence,
          Memory: bloodline.memory,
          Name: bloodline.name,
          Perception: bloodline.perception,
          RaceId: bloodline.race_id,
          ShipTypeId: bloodline.ship_type_id,
          Willpower: bloodline.willpower
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
