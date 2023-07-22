import { Test, TestingModule } from '@nestjs/testing'
import { AllianceSyncController } from './alliance-sync.controller'
import { AllianceSyncService } from './alliance-sync.service'

describe('AllianceSyncController', () => {
  let allianceSyncController: AllianceSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AllianceSyncController],
      providers: [AllianceSyncService]
    }).compile()

    allianceSyncController = app.get<AllianceSyncController>(
      AllianceSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(allianceSyncController.getHello()).toBe('Hello World!')
    })
  })
})
