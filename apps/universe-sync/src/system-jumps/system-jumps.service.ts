import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { InjectRepository } from '@nestjs/typeorm'
import { SystemJump } from 'libs/database'
import { Repository } from 'typeorm'
import { DateTime } from 'luxon'
import { publicClient } from 'libs/esi'

@Injectable()
@Processor('universe-system-jumps')
export class SystemJumpsService extends WorkerHost {
  private readonly logger = new Logger('SystemJumpsService')

  @InjectRepository(SystemJump)
  systemJumpsRepository: Repository<SystemJump>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = publicClient()
      const res = await client.universe.getUniverseSystemJumps({})

      for (const system of res) {
        await this.systemJumpsRepository.save({
          systemId: system.system_id,
          shipJumps: system.ship_jumps,
          timestamp: DateTime.now().toUTC().toISO()
        })
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
