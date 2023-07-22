import { Test, TestingModule } from '@nestjs/testing'
import { MarketSyncController } from './market-sync.controller'
import { MarketSyncService } from './market-sync.service'

describe('MarketSyncController', () => {
  let marketSyncController: MarketSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MarketSyncController],
      providers: [MarketSyncService]
    }).compile()

    marketSyncController = app.get<MarketSyncController>(MarketSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(marketSyncController.getHello()).toBe('Hello World!')
    })
  })
})
