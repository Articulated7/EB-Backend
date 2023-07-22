import { Module } from '@nestjs/common'
import { FleetSyncController } from './fleet-sync.controller'
import { FleetSyncService } from './fleet-sync.service'

@Module({
  imports: [],
  controllers: [FleetSyncController],
  providers: [FleetSyncService]
})
export class FleetSyncModule {}
