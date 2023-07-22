import { Controller, Get } from '@nestjs/common'
import { ContactSyncService } from './contact-sync.service'

@Controller()
export class ContactSyncController {
  constructor(private readonly contactSyncService: ContactSyncService) {}

  @Get()
  getHello(): string {
    return this.contactSyncService.getHello()
  }
}
