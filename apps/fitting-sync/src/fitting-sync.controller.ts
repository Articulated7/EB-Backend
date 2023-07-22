import { Controller, Get } from '@nestjs/common'
import { FittingSyncService } from './fitting-sync.service'

@Controller()
export class FittingSyncController {
  constructor(private readonly fittingSyncService: FittingSyncService) {}

  @Get()
  getHello(): string {
    return this.fittingSyncService.getHello()
  }
}
