import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Moon } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-moons')
export class MoonsService extends WorkerHost {
  private readonly logger = new Logger('MoonsService')

  @InjectRepository(Moon)
  moonRepository: Repository<Moon>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniverseMoonsMoonId({
        moonId: job.data.id
      })

      await this.moonRepository.upsert(
        {
          moonId: res.moon_id,
          name: res.name,
          position: res.position,
          systemId: res.system_id
        },
        ['moonId']
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
