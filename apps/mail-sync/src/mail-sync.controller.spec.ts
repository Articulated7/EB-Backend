import { Test, TestingModule } from '@nestjs/testing'
import { MailSyncController } from './mail-sync.controller'
import { MailSyncService } from './mail-sync.service'

describe('MailSyncController', () => {
  let mailSyncController: MailSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MailSyncController],
      providers: [MailSyncService]
    }).compile()

    mailSyncController = app.get<MailSyncController>(MailSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mailSyncController.getHello()).toBe('Hello World!')
    })
  })
})
