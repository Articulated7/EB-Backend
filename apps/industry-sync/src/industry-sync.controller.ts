import { Controller, Get } from '@nestjs/common'
import { IndustrySyncService } from './industry-sync.service'

@Controller()
export class IndustrySyncController {
  constructor(private readonly industrySyncService: IndustrySyncService) {}

  @Get()
  getHello(): string {
    return this.industrySyncService.getHello()
  }
}
