import { Module } from '@nestjs/common'
import { WarSyncController } from './war-sync.controller'
import { WarSyncService } from './war-sync.service'

@Module({
  imports: [],
  controllers: [WarSyncController],
  providers: [WarSyncService]
})
export class WarSyncModule {}
