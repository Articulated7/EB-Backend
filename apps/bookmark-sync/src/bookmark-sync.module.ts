import { Module } from '@nestjs/common'
import { BookmarkSyncController } from './bookmark-sync.controller'
import { BookmarkSyncService } from './bookmark-sync.service'

@Module({
  imports: [],
  controllers: [BookmarkSyncController],
  providers: [BookmarkSyncService]
})
export class BookmarkSyncModule {}
