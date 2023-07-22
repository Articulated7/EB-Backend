import { Test, TestingModule } from '@nestjs/testing'
import { CloneSyncController } from './clone-sync.controller'
import { CloneSyncService } from './clone-sync.service'

describe('CloneSyncController', () => {
  let cloneSyncController: CloneSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CloneSyncController],
      providers: [CloneSyncService]
    }).compile()

    cloneSyncController = app.get<CloneSyncController>(CloneSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cloneSyncController.getHello()).toBe('Hello World!')
    })
  })
})
