import { Module } from '@nestjs/common'
import { FwSyncController } from './fw-sync.controller'
import { FwSyncService } from './fw-sync.service'

@Module({
  imports: [],
  controllers: [FwSyncController],
  providers: [FwSyncService]
})
export class FwSyncModule {}
