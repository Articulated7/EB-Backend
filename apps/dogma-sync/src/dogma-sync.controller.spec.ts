import { Test, TestingModule } from '@nestjs/testing'
import { DogmaSyncController } from './dogma-sync.controller'
import { DogmaSyncService } from './dogma-sync.service'

describe('DogmaSyncController', () => {
  let dogmaSyncController: DogmaSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DogmaSyncController],
      providers: [DogmaSyncService]
    }).compile()

    dogmaSyncController = app.get<DogmaSyncController>(DogmaSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dogmaSyncController.getHello()).toBe('Hello World!')
    })
  })
})
