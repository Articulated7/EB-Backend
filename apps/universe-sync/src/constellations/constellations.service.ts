import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Constellation } from 'libs/database'
import { publicClient } from 'libs/esi'

@Injectable()
@Processor('universe-factions')
export class ConstellationsService extends WorkerHost {
  private readonly logger = new Logger('ConstellationsService')

  @InjectRepository(Constellation)
  constellationRepository: Repository<Constellation>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = publicClient()
      const res =
        await client.universe.getUniverseConstellationsConstellationId({
          constellationId: job.data.id
        })
      await this.constellationRepository.upsert(
        {
          constellationId: res.constellation_id,
          name: res.name,
          position: res.position,
          regionId: res.region_id,
          system: res.systems
        },
        ['constellationId']
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
