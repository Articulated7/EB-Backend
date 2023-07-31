import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Category } from 'libs/database'
import { publicClient } from 'libs/esi'

@Injectable()
@Processor('universe-catagories')
export class CatagoriesService extends WorkerHost {
  private readonly logger = new Logger('CatagoriesService')

  @InjectRepository(Category)
  categoryRepository: Repository<Category>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = publicClient()

      const res = await client.universe.getUniverseCategoriesCategoryId({
        categoryId: job.data.id
      })

      await this.categoryRepository.upsert(
        {
          id: res.category_id,
          group: res.groups,
          name: res.name,
          published: res.published
        },
        ['id']
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
