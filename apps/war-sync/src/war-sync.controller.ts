import { Controller, Get } from '@nestjs/common'
import { WarSyncService } from './war-sync.service'

@Controller()
export class WarSyncController {
  constructor(private readonly warSyncService: WarSyncService) {}

  @Get()
  getHello(): string {
    return this.warSyncService.getHello()
  }
}
