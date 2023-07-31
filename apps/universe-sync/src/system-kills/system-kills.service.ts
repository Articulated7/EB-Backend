import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { SystemKill } from 'libs/database'
import { Repository } from 'typeorm'
import { DateTime } from 'luxon'

@Injectable()
@Processor('universe-system-kills')
export class SystemKillsService extends WorkerHost {
  private readonly logger = new Logger('SystemKillsService')
  @InjectRepository(SystemKill)
  systemKillRepository: Repository<SystemKill>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniverseSystemKills({})

      for (const system of res) {
        await this.systemKillRepository.save({
          systemId: system.system_id,
          shipKills: system.ship_kills,
          npcKills: system.npc_kills,
          podKills: system.pod_kills,
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
