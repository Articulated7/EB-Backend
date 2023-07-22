import { Test, TestingModule } from '@nestjs/testing'
import { CorporationSyncController } from './corporation-sync.controller'
import { CorporationSyncService } from './corporation-sync.service'

describe('CorporationSyncController', () => {
  let corporationSyncController: CorporationSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CorporationSyncController],
      providers: [CorporationSyncService]
    }).compile()

    corporationSyncController = app.get<CorporationSyncController>(
      CorporationSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(corporationSyncController.getHello()).toBe('Hello World!')
    })
  })
})
