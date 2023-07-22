import { Controller, Get } from '@nestjs/common'
import { LoyaltySyncService } from './loyalty-sync.service'

@Controller()
export class LoyaltySyncController {
  constructor(private readonly loyaltySyncService: LoyaltySyncService) {}

  @Get()
  getHello(): string {
    return this.loyaltySyncService.getHello()
  }
}
