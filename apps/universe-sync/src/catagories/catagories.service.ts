import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { PrismaService } from 'libs/prisma.service'

@Injectable()
@Processor('universe-catagories')
export class CatagoriesService extends WorkerHost {
  private readonly logger = new Logger('CatagoriesService')
  @Inject(PrismaService) private prisma: PrismaService

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()

      const res = await client.universe.getUniverseCategoriesCategoryId({
        categoryId: job.data.id
      })

      await this.prisma.categories.upsert({
        where: { CategoryId: res.category_id },
        update: {
          Name: res.name,
          Published: res.published,
          Group: res.groups
        },
        create: {
          CategoryId: res.category_id,
          Name: res.name,
          Published: res.published,
          Group: res.groups
        }
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
