import { Controller, Get } from '@nestjs/common'
import { KillmailSyncService } from './killmail-sync.service'

@Controller()
export class KillmailSyncController {
  constructor(private readonly killmailSyncService: KillmailSyncService) {}

  @Get()
  getHello(): string {
    return this.killmailSyncService.getHello()
  }
}
