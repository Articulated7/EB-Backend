import { Test, TestingModule } from '@nestjs/testing'
import { UniverseSyncController } from './universe-sync.controller'
import { UniverseSyncService } from './universe-sync.service'

describe('UniverseSyncController', () => {
  let universeSyncController: UniverseSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UniverseSyncController],
      providers: [UniverseSyncService]
    }).compile()

    universeSyncController = app.get<UniverseSyncController>(
      UniverseSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(universeSyncController.getHello()).toBe('Hello World!')
    })
  })
})
