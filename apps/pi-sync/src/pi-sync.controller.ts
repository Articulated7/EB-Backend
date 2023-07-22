import { Controller, Get } from '@nestjs/common'
import { PiSyncService } from './pi-sync.service'

@Controller()
export class PiSyncController {
  constructor(private readonly piSyncService: PiSyncService) {}

  @Get()
  getHello(): string {
    return this.piSyncService.getHello()
  }
}
