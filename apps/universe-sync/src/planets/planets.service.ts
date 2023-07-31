import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Planet } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-planets')
export class PlanetsService extends WorkerHost {
  private readonly logger = new Logger('PlanetsService')

  @InjectRepository(Planet)
  planetRepository: Repository<Planet>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniversePlanetsPlanetId({
        planetId: job.data.id
      })

      await this.planetRepository.upsert(
        {
          name: res.name,
          planetId: res.planet_id,
          position: res.position,
          systemId: res.system_id,
          typeId: res.type_id
        },
        ['planetId']
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
