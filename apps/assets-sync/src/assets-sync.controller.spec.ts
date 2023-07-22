import { Test, TestingModule } from '@nestjs/testing'
import { AssetsSyncController } from './assets-sync.controller'
import { AssetsSyncService } from './assets-sync.service'

describe('AssetsSyncController', () => {
  let assetsSyncController: AssetsSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssetsSyncController],
      providers: [AssetsSyncService]
    }).compile()

    assetsSyncController = app.get<AssetsSyncController>(AssetsSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(assetsSyncController.getHello()).toBe('Hello World!')
    })
  })
})
