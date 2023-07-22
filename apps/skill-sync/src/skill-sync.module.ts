import { Module } from '@nestjs/common'
import { SkillSyncController } from './skill-sync.controller'
import { SkillSyncService } from './skill-sync.service'

@Module({
  imports: [],
  controllers: [SkillSyncController],
  providers: [SkillSyncService]
})
export class SkillSyncModule {}
