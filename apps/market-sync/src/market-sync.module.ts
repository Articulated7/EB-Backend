import { Module } from '@nestjs/common'
import { MarketSyncController } from './market-sync.controller'
import { MarketSyncService } from './market-sync.service'

@Module({
  imports: [],
  controllers: [MarketSyncController],
  providers: [MarketSyncService]
})
export class MarketSyncModule {}
