import { Controller, Get } from '@nestjs/common'
import { FleetSyncService } from './fleet-sync.service'

@Controller()
export class FleetSyncController {
  constructor(private readonly fleetSyncService: FleetSyncService) {}

  @Get()
  getHello(): string {
    return this.fleetSyncService.getHello()
  }
}
