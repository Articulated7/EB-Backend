import { Module } from '@nestjs/common'
import { UniverseSyncController } from './universe-sync.controller'
import { UniverseSyncService } from './universe-sync.service'

@Module({
  imports: [],
  controllers: [UniverseSyncController],
  providers: [UniverseSyncService]
})
export class UniverseSyncModule {}
