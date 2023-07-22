import { Test, TestingModule } from '@nestjs/testing'
import { IndustrySyncController } from './industry-sync.controller'
import { IndustrySyncService } from './industry-sync.service'

describe('IndustrySyncController', () => {
  let industrySyncController: IndustrySyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IndustrySyncController],
      providers: [IndustrySyncService]
    }).compile()

    industrySyncController = app.get<IndustrySyncController>(
      IndustrySyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(industrySyncController.getHello()).toBe('Hello World!')
    })
  })
})
