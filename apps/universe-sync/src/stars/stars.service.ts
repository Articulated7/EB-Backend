import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Star } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-stars')
export class StarsService extends WorkerHost {
  private readonly logger = new Logger('StarsService')

  @InjectRepository(Star)
  starRepository: Repository<Star>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniverseStarsStarId({
        starId: job.data.id
      })

      await this.starRepository.upsert(
        {
          starId: job.data.id,
          age: res.age,
          luminosity: res.luminosity,
          name: res.name,
          radius: res.radius,
          solarSystemId: res.solar_system_id,
          spectralClass: res.spectral_class,
          temperature: res.temperature,
          typeId: res.type_id
        },
        ['starId']
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
