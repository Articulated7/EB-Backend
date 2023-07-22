import { Module } from '@nestjs/common'
import { KillmailSyncController } from './killmail-sync.controller'
import { KillmailSyncService } from './killmail-sync.service'

@Module({
  imports: [],
  controllers: [KillmailSyncController],
  providers: [KillmailSyncService]
})
export class KillmailSyncModule {}
