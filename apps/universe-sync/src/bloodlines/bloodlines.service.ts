import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Bloodline } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-bloodlines')
export class BloodlinesService extends WorkerHost {
  private readonly logger = new Logger('BloodlinesService')

  @InjectRepository(Bloodline)
  bloodlineRepository: Repository<Bloodline>

  async process(job: Job<any, any, string>): Promise<any> {
    const client = new EVEClient()

    const res = await client.universe.getUniverseBloodlines({})

    for (const bloodline of res) {
      await this.bloodlineRepository.upsert(
        {
          id: bloodline.bloodline_id,
          charisma: bloodline.charisma,
          corporationId: bloodline.corporation_id,
          description: bloodline.description,
          intelligence: bloodline.intelligence,
          memory: bloodline.memory,
          name: bloodline.name,
          perception: bloodline.perception,
          raceId: bloodline.race_id,
          shipTypeId: bloodline.ship_type_id,
          willpower: bloodline.willpower
        },
        ['id']
      )
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
