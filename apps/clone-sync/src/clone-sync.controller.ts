import { Controller, Get } from '@nestjs/common'
import { CloneSyncService } from './clone-sync.service'

@Controller()
export class CloneSyncController {
  constructor(private readonly cloneSyncService: CloneSyncService) {}

  @Get()
  getHello(): string {
    return this.cloneSyncService.getHello()
  }
}
