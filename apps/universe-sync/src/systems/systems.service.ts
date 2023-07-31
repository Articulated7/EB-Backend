import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { InjectRepository } from '@nestjs/typeorm'
import { System } from 'libs/database'
import { Repository } from 'typeorm'
import { publicClient } from 'libs/esi'

@Injectable()
@Processor('universe-systems')
export class SystemsService extends WorkerHost {
  private readonly logger = new Logger('SystemsService')

  @InjectRepository(System)
  systemRepository: Repository<System>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = publicClient()
      const res = await client.universe.getUniverseSystemsSystemId({
        systemId: job.data.id
      })

      await this.systemRepository.upsert(
        {
          systemId: res.system_id,
          constellationId: res.constellation_id,
          name: res.name,
          planet: res.planets,
          position: res.position,
          securityClass: res.security_class,
          securityStatus: res.security_status,
          starId: res.star_id,
          stargate: res.stargates,
          stations: res.stations
        },
        ['systemId']
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
