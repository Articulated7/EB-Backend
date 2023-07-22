import { Test, TestingModule } from '@nestjs/testing'
import { WarSyncController } from './war-sync.controller'
import { WarSyncService } from './war-sync.service'

describe('WarSyncController', () => {
  let warSyncController: WarSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WarSyncController],
      providers: [WarSyncService]
    }).compile()

    warSyncController = app.get<WarSyncController>(WarSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(warSyncController.getHello()).toBe('Hello World!')
    })
  })
})
