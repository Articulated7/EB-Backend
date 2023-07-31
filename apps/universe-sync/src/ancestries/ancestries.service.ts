import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Ancestry } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-ancestries')
export class AncestriesService extends WorkerHost {
  private readonly logger = new Logger('AncestriesService')

  @InjectRepository(Ancestry)
  ancestryRepository: Repository<Ancestry>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()

      const res = await client.universe.getUniverseAncestries({})

      for (const ancestry of res) {
        await this.ancestryRepository.upsert(
          {
            id: ancestry['id'],
            bloodlineId: ancestry['bloodline_id'],
            description: ancestry['description'],
            iconId: ancestry['icon_id'],
            name: ancestry['name'],
            shortDescription: ancestry['short_description']
          },
          ['id']
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
