import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Race } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-races')
export class RacesService extends WorkerHost {
  private readonly logger = new Logger('RacesService')

  @InjectRepository(Race)
  raceRepository: Repository<Race>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const results = await client.universe.getUniverseRaces({})

      for (const res of results) {
        await this.raceRepository.upsert(
          {
            allianceId: res.alliance_id,
            description: res.description,
            name: res.name,
            raceId: res.race_id
          },
          ['raceId']
        )
      }
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
