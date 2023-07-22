import { Controller, Get } from '@nestjs/common'
import { MarketSyncService } from './market-sync.service'

@Controller()
export class MarketSyncController {
  constructor(private readonly marketSyncService: MarketSyncService) {}

  @Get()
  getHello(): string {
    return this.marketSyncService.getHello()
  }
}
