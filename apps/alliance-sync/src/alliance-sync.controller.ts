import { Controller, Get } from '@nestjs/common'
import { AllianceSyncService } from './alliance-sync.service'

@Controller()
export class AllianceSyncController {
  constructor(private readonly allianceSyncService: AllianceSyncService) {}

  @Get()
  getHello(): string {
    return this.allianceSyncService.getHello()
  }
}
