import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { publicClient } from 'libs/esi'
import { InjectRepository } from '@nestjs/typeorm'
import { Type } from 'libs/database'
import { Repository } from 'typeorm'

@Injectable()
@Processor('universe-types', { concurrency: 10 })
export class TypesService extends WorkerHost {
  private readonly logger = new Logger('TypesService')

  @InjectRepository(Type)
  typeRepository: Repository<Type>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = publicClient()

      const typeRes = await client.universe.getUniverseTypes({
        page: job.data.page
      })

      for (const t of typeRes) {
        const res = await client.universe.getUniverseTypesTypeId({
          typeId: t
        })

        // const dogmaToBigInt = res.dogma_attributes.map((a) => {
        //   return { ...a, value: BigInt(a.value) }
        // })

        await this.typeRepository.upsert(
          {
            id: res.type_id,
            capacity: res.capacity,
            description: res.description,
            dogmaAttributes: res.dogma_attributes,
            dogmaEffects: res.dogma_effects,
            graphicId: res.graphic_id,
            groupId: res.group_id,
            iconId: res.icon_id,
            marketGroupId: res.market_group_id,
            mass: res.mass,
            name: res.name,
            packagedVolume: res.packaged_volume,
            portionSize: res.portion_size,
            published: res.published,
            radius: res.radius,
            volume: res.volume
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
