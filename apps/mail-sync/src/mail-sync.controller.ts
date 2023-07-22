import { Controller, Get } from '@nestjs/common'
import { MailSyncService } from './mail-sync.service'

@Controller()
export class MailSyncController {
  constructor(private readonly mailSyncService: MailSyncService) {}

  @Get()
  getHello(): string {
    return this.mailSyncService.getHello()
  }
}
