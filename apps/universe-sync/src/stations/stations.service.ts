import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Station } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-stations')
export class StationsService extends WorkerHost {
  private readonly logger = new Logger('StationsService')

  @InjectRepository(Station)
  stationRepository: Repository<Station>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniverseStationsStationId({
        stationId: job.data.id
      })

      await this.stationRepository.upsert(
        {
          stationId: res.station_id,
          maxDockableShipVolume: res.max_dockable_ship_volume,
          name: res.name,
          officeRentalCost: res.office_rental_cost,
          owner: res.owner,
          position: res.position,
          raceId: res.race_id,
          reprocessingEfficiency: res.reprocessing_efficiency,
          reprocessingStationsTake: res.reprocessing_stations_take,
          services: res.services,
          systemId: res.system_id,
          typeId: res.type_id
        },
        ['stationId']
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
