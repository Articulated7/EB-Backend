import { Test, TestingModule } from '@nestjs/testing'
import { IncursionSyncController } from './incursion-sync.controller'
import { IncursionSyncService } from './incursion-sync.service'

describe('IncursionSyncController', () => {
  let incursionSyncController: IncursionSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IncursionSyncController],
      providers: [IncursionSyncService]
    }).compile()

    incursionSyncController = app.get<IncursionSyncController>(
      IncursionSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(incursionSyncController.getHello()).toBe('Hello World!')
    })
  })
})
