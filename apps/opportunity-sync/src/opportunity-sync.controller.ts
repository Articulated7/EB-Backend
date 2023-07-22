import { Controller, Get } from '@nestjs/common'
import { OpportunitySyncService } from './opportunity-sync.service'

@Controller()
export class OpportunitySyncController {
  constructor(
    private readonly opportunitySyncService: OpportunitySyncService
  ) {}

  @Get()
  getHello(): string {
    return this.opportunitySyncService.getHello()
  }
}
