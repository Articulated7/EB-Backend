import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Faction } from 'libs/database'

@Injectable()
@Processor('universe-factions')
export class FactionsService extends WorkerHost {
  private readonly logger = new Logger('FactionsService')

  @InjectRepository(Faction)
  factionRepository: Repository<Faction>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()

      const res = await client.universe.getUniverseFactions({})

      for (const faction of res) {
        await this.factionRepository.upsert(
          {
            corporationId: faction.corporation_id,
            description: faction.description,
            factionId: faction.faction_id,
            isUnique: faction.is_unique,
            militiaCorporationId: faction.militia_corporation_id,
            name: faction.name,
            sizeFactor: faction.size_factor,
            solarSystemId: faction.solar_system_id,
            stationCount: faction.station_count,
            stationSystemCount: faction.station_system_count
          },
          ['faction_id']
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
