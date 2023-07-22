import { Module } from '@nestjs/common'
import { IncursionSyncController } from './incursion-sync.controller'
import { IncursionSyncService } from './incursion-sync.service'

@Module({
  imports: [],
  controllers: [IncursionSyncController],
  providers: [IncursionSyncService]
})
export class IncursionSyncModule {}
