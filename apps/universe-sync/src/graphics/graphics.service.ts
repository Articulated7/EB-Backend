import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Graphic } from 'libs/database'

@Injectable()
@Processor('universe-graphics')
export class GraphicsService extends WorkerHost {
  private readonly logger = new Logger('GraphicsService')

  @InjectRepository(Graphic)
  graphicRepository: Repository<Graphic>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniverseGraphicsGraphicId({
        graphicId: job.data.id
      })

      await this.graphicRepository.upsert(
        {
          graphicId: res.graphic_id,
          collisionFile: res.collision_file,
          graphicFile: res.graphic_file,
          iconFolder: res.icon_folder,
          sofDna: res.sof_dna,
          sofFationName: res.sof_fation_name,
          sofHullName: res.sof_hull_name,
          sofRaceName: res.sof_race_name
        },
        ['graphicId']
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
