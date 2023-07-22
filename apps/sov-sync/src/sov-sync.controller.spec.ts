import { Test, TestingModule } from '@nestjs/testing'
import { SovSyncController } from './sov-sync.controller'
import { SovSyncService } from './sov-sync.service'

describe('SovSyncController', () => {
  let sovSyncController: SovSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SovSyncController],
      providers: [SovSyncService]
    }).compile()

    sovSyncController = app.get<SovSyncController>(SovSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sovSyncController.getHello()).toBe('Hello World!')
    })
  })
})
