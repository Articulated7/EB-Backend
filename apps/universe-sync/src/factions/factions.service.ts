import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { PrismaService } from 'libs/prisma.service'

@Injectable()
@Processor('universe-factions')
export class FactionsService extends WorkerHost {
  private readonly logger = new Logger('FactionsService')
  @Inject(PrismaService) private prisma: PrismaService

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()

      const res = await client.universe.getUniverseFactions({})

      res.forEach(async (faction) => {
        await this.prisma.factions.upsert({
          where: { FactionId: faction.faction_id },
          update: {
            Name: faction.name,
            Description: faction.description,
            MilitiaCorporationId: faction.militia_corporation_id,
            SizeFactor: faction.size_factor,
            StationCount: faction.station_count,
            StationSystemCount: faction.station_system_count,
            IsUnique: faction.is_unique,
            SolarSystemId: faction.solar_system_id,
            CorporationId: faction.corporation_id
          },
          create: {
            FactionId: faction.faction_id,
            Name: faction.name,
            Description: faction.description,
            MilitiaCorporationId: faction.militia_corporation_id,
            SizeFactor: faction.size_factor,
            StationCount: faction.station_count,
            StationSystemCount: faction.station_system_count,
            IsUnique: faction.is_unique,
            SolarSystemId: faction.solar_system_id,
            CorporationId: faction.corporation_id
          }
        })
      })
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
