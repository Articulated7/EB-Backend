import { Module } from '@nestjs/common'
import { MailSyncController } from './mail-sync.controller'
import { MailSyncService } from './mail-sync.service'

@Module({
  imports: [],
  controllers: [MailSyncController],
  providers: [MailSyncService]
})
export class MailSyncModule {}
