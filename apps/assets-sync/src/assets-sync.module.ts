import { Module } from '@nestjs/common'
import { AssetsSyncController } from './assets-sync.controller'
import { AssetsSyncService } from './assets-sync.service'

@Module({
  imports: [],
  controllers: [AssetsSyncController],
  providers: [AssetsSyncService]
})
export class AssetsSyncModule {}
