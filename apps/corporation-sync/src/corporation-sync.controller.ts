import { Controller, Get } from '@nestjs/common'
import { CorporationSyncService } from './corporation-sync.service'

@Controller()
export class CorporationSyncController {
  constructor(
    private readonly corporationSyncService: CorporationSyncService
  ) {}

  @Get()
  getHello(): string {
    return this.corporationSyncService.getHello()
  }
}
