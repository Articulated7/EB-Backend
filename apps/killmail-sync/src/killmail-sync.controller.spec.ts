import { Test, TestingModule } from '@nestjs/testing'
import { KillmailSyncController } from './killmail-sync.controller'
import { KillmailSyncService } from './killmail-sync.service'

describe('KillmailSyncController', () => {
  let killmailSyncController: KillmailSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KillmailSyncController],
      providers: [KillmailSyncService]
    }).compile()

    killmailSyncController = app.get<KillmailSyncController>(
      KillmailSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(killmailSyncController.getHello()).toBe('Hello World!')
    })
  })
})
