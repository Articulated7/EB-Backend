import { Controller, Get } from '@nestjs/common'
import { LocationSyncService } from './location-sync.service'

@Controller()
export class LocationSyncController {
  constructor(private readonly locationSyncService: LocationSyncService) {}

  @Get()
  getHello(): string {
    return this.locationSyncService.getHello()
  }
}
