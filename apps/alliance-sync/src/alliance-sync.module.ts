import { Module } from '@nestjs/common'
import { AllianceSyncController } from './alliance-sync.controller'
import { AllianceSyncService } from './alliance-sync.service'

@Module({
  imports: [],
  controllers: [AllianceSyncController],
  providers: [AllianceSyncService]
})
export class AllianceSyncModule {}
