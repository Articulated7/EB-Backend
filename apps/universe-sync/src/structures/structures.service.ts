import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { InjectRepository } from '@nestjs/typeorm'
import { Structure } from 'libs/database'
import { Repository } from 'typeorm'
import { publicClient } from 'libs/esi'

@Injectable()
@Processor('universe-strucutres')
export class StructuresService extends WorkerHost {
  private readonly logger = new Logger('StructuresService')

  @InjectRepository(Structure)
  structureRepository: Repository<Structure>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = publicClient()
      const res = await client.universe.getUniverseStructuresStructureId({
        structureId: job.data.id
      })

      await this.structureRepository.upsert(
        {
          structureId: job.data.id,
          name: res.name,
          ownerId: res.owner_id,
          position: res.position,
          solarSystemId: res.solar_system_id,
          typeId: res.type_id
        },
        ['structureId']
      )
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
