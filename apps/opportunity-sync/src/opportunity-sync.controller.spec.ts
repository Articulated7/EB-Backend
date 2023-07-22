import { Test, TestingModule } from '@nestjs/testing'
import { OpportunitySyncController } from './opportunity-sync.controller'
import { OpportunitySyncService } from './opportunity-sync.service'

describe('OpportunitySyncController', () => {
  let opportunitySyncController: OpportunitySyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OpportunitySyncController],
      providers: [OpportunitySyncService]
    }).compile()

    opportunitySyncController = app.get<OpportunitySyncController>(
      OpportunitySyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(opportunitySyncController.getHello()).toBe('Hello World!')
    })
  })
})
