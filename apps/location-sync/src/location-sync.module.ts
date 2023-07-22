import { Module } from '@nestjs/common'
import { LocationSyncController } from './location-sync.controller'
import { LocationSyncService } from './location-sync.service'

@Module({
  imports: [],
  controllers: [LocationSyncController],
  providers: [LocationSyncService]
})
export class LocationSyncModule {}
