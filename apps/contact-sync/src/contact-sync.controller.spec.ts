import { Test, TestingModule } from '@nestjs/testing'
import { ContactSyncController } from './contact-sync.controller'
import { ContactSyncService } from './contact-sync.service'

describe('ContactSyncController', () => {
  let contactSyncController: ContactSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ContactSyncController],
      providers: [ContactSyncService]
    }).compile()

    contactSyncController = app.get<ContactSyncController>(
      ContactSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(contactSyncController.getHello()).toBe('Hello World!')
    })
  })
})
