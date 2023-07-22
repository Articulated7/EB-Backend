import { Module } from '@nestjs/common'
import { ContactSyncController } from './contact-sync.controller'
import { ContactSyncService } from './contact-sync.service'

@Module({
  imports: [],
  controllers: [ContactSyncController],
  providers: [ContactSyncService]
})
export class ContactSyncModule {}
