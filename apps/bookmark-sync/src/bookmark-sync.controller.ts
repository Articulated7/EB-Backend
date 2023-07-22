import { Controller, Get } from '@nestjs/common'
import { BookmarkSyncService } from './bookmark-sync.service'

@Controller()
export class BookmarkSyncController {
  constructor(private readonly bookmarkSyncService: BookmarkSyncService) {}

  @Get()
  getHello(): string {
    return this.bookmarkSyncService.getHello()
  }
}
