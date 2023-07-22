import { Controller, Get } from '@nestjs/common'
import { DogmaSyncService } from './dogma-sync.service'

@Controller()
export class DogmaSyncController {
  constructor(private readonly dogmaSyncService: DogmaSyncService) {}

  @Get()
  getHello(): string {
    return this.dogmaSyncService.getHello()
  }
}
