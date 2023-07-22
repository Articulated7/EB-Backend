import { Test, TestingModule } from '@nestjs/testing'
import { PiSyncController } from './pi-sync.controller'
import { PiSyncService } from './pi-sync.service'

describe('PiSyncController', () => {
  let piSyncController: PiSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PiSyncController],
      providers: [PiSyncService]
    }).compile()

    piSyncController = app.get<PiSyncController>(PiSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(piSyncController.getHello()).toBe('Hello World!')
    })
  })
})
