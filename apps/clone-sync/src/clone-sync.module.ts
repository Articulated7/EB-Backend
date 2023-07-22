import { Module } from '@nestjs/common'
import { CloneSyncController } from './clone-sync.controller'
import { CloneSyncService } from './clone-sync.service'

@Module({
  imports: [],
  controllers: [CloneSyncController],
  providers: [CloneSyncService]
})
export class CloneSyncModule {}
