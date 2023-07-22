import { Test, TestingModule } from '@nestjs/testing'
import { FwSyncController } from './fw-sync.controller'
import { FwSyncService } from './fw-sync.service'

describe('FwSyncController', () => {
  let fwSyncController: FwSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FwSyncController],
      providers: [FwSyncService]
    }).compile()

    fwSyncController = app.get<FwSyncController>(FwSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fwSyncController.getHello()).toBe('Hello World!')
    })
  })
})
