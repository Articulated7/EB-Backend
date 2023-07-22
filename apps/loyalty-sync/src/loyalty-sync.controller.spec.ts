import { Test, TestingModule } from '@nestjs/testing'
import { LoyaltySyncController } from './loyalty-sync.controller'
import { LoyaltySyncService } from './loyalty-sync.service'

describe('LoyaltySyncController', () => {
  let loyaltySyncController: LoyaltySyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoyaltySyncController],
      providers: [LoyaltySyncService]
    }).compile()

    loyaltySyncController = app.get<LoyaltySyncController>(
      LoyaltySyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(loyaltySyncController.getHello()).toBe('Hello World!')
    })
  })
})
