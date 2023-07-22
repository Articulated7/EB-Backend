import { Controller, Get } from '@nestjs/common'
import { SovSyncService } from './sov-sync.service'

@Controller()
export class SovSyncController {
  constructor(private readonly sovSyncService: SovSyncService) {}

  @Get()
  getHello(): string {
    return this.sovSyncService.getHello()
  }
}
