import { Module } from '@nestjs/common'
import { PiSyncController } from './pi-sync.controller'
import { PiSyncService } from './pi-sync.service'

@Module({
  imports: [],
  controllers: [PiSyncController],
  providers: [PiSyncService]
})
export class PiSyncModule {}
