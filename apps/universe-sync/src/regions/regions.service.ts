import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Region } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-regions')
export class RegionsService extends WorkerHost {
  private readonly logger = new Logger('RegionsService')

  @InjectRepository(Region)
  regionRepository: Repository<Region>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniverseRegionsRegionId({
        regionId: job.data.id
      })

      await this.regionRepository.upsert(
        {
          regionId: res.region_id,
          constellation: res.constellations,
          description: res.description,
          name: res.name
        },
        ['regionId']
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
