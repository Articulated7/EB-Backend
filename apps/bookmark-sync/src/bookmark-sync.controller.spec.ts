import { Test, TestingModule } from '@nestjs/testing'
import { BookmarkSyncController } from './bookmark-sync.controller'
import { BookmarkSyncService } from './bookmark-sync.service'

describe('BookmarkSyncController', () => {
  let bookmarkSyncController: BookmarkSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookmarkSyncController],
      providers: [BookmarkSyncService]
    }).compile()

    bookmarkSyncController = app.get<BookmarkSyncController>(
      BookmarkSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookmarkSyncController.getHello()).toBe('Hello World!')
    })
  })
})
