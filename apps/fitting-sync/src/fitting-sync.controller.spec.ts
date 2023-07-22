import { Test, TestingModule } from '@nestjs/testing'
import { FittingSyncController } from './fitting-sync.controller'
import { FittingSyncService } from './fitting-sync.service'

describe('FittingSyncController', () => {
  let fittingSyncController: FittingSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FittingSyncController],
      providers: [FittingSyncService]
    }).compile()

    fittingSyncController = app.get<FittingSyncController>(
      FittingSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fittingSyncController.getHello()).toBe('Hello World!')
    })
  })
})
