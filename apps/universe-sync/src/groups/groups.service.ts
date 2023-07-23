import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { EVEClient } from 'libs/esi'
import { PrismaService } from 'libs/prisma.service'

@Injectable()
@Processor('universe-groups')
export class GroupsService extends WorkerHost {
  private readonly logger = new Logger('AncestriesService')
  @Inject(PrismaService) private prisma: PrismaService

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = new EVEClient()
      const res = await client.universe.getUniverseGroupsGroupId({
        groupId: job.data.id
      })

      await this.prisma.group.upsert({
        where: { GroupId: res.group_id },
        update: {
          Name: res.name,
          CategoryId: res.category_id,
          Published: res.published,
          Types: res.types
        },
        create: {
          GroupId: res.group_id,
          Name: res.name,
          CategoryId: res.category_id,
          Published: res.published,
          Types: res.types
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
