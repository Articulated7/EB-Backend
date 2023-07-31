import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq'
import { Injectable, Logger } from '@nestjs/common'
import { Job } from 'bullmq'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Group } from 'libs/database'
import { publicClient } from 'libs/esi'

@Injectable()
@Processor('universe-groups')
export class GroupsService extends WorkerHost {
  private readonly logger = new Logger('AncestriesService')

  @InjectRepository(Group)
  groupRepository: Repository<Group>

  async process(job: Job<any, any, string>): Promise<any> {
    try {
      const client = publicClient()
      const res = await client.universe.getUniverseGroupsGroupId({
        groupId: job.data.id
      })

      await this.groupRepository.upsert(
        {
          groupId: res.group_id,
          categoryId: res.category_id,
          name: res.name,
          published: res.published,
          types: res.types
        },
        ['groupId']
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
