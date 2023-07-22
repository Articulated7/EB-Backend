import { Controller, Get } from '@nestjs/common'
import { AssetsSyncService } from './assets-sync.service'

@Controller()
export class AssetsSyncController {
  constructor(private readonly assetsSyncService: AssetsSyncService) {}

  @Get()
  getHello(): string {
    return this.assetsSyncService.getHello()
  }
}
