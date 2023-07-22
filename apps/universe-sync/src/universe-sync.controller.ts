import { Controller, Get } from '@nestjs/common'
import { UniverseSyncService } from './universe-sync.service'

@Controller()
export class UniverseSyncController {
  constructor(private readonly universeSyncService: UniverseSyncService) {}

  @Get()
  getHello(): string {
    return this.universeSyncService.getHello()
  }
}
