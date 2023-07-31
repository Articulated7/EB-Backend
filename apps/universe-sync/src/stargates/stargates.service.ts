import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Stargate } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-stargates')
export class StargatesService extends WorkerHost {
  private readonly logger = new Logger('StargatesService')

  @InjectRepository(Stargate)
  stargateRepository: Repository<Stargate>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniverseStargatesStargateId({
        stargateId: job.data.id
      })

      await this.stargateRepository.upsert(
        {
          stargateId: res.stargate_id,
          destination: res.destination,
          name: res.name,
          position: res.position,
          systemId: res.system_id,
          typeId: res.type_id
        },
        ['stargateId']
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
