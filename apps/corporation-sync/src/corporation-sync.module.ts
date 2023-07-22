import { Module } from '@nestjs/common'
import { CorporationSyncController } from './corporation-sync.controller'
import { CorporationSyncService } from './corporation-sync.service'

@Module({
  imports: [],
  controllers: [CorporationSyncController],
  providers: [CorporationSyncService]
})
export class CorporationSyncModule {}
