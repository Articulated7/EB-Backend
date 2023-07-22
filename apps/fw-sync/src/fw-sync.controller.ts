import { Controller, Get } from '@nestjs/common'
import { FwSyncService } from './fw-sync.service'

@Controller()
export class FwSyncController {
  constructor(private readonly fwSyncService: FwSyncService) {}

  @Get()
  getHello(): string {
    return this.fwSyncService.getHello()
  }
}
