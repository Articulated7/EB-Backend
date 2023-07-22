import { Module } from '@nestjs/common'
import { SovSyncController } from './sov-sync.controller'
import { SovSyncService } from './sov-sync.service'

@Module({
  imports: [],
  controllers: [SovSyncController],
  providers: [SovSyncService]
})
export class SovSyncModule {}
