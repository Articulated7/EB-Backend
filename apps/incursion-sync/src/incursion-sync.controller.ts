import { Controller, Get } from '@nestjs/common'
import { IncursionSyncService } from './incursion-sync.service'

@Controller()
export class IncursionSyncController {
  constructor(private readonly incursionSyncService: IncursionSyncService) {}

  @Get()
  getHello(): string {
    return this.incursionSyncService.getHello()
  }
}
