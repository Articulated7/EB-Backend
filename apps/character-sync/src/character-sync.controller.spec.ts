import { Test, TestingModule } from '@nestjs/testing'
import { CharacterSyncController } from './character-sync.controller'
import { CharacterSyncService } from './character-sync.service'

describe('CharacterSyncController', () => {
  let characterSyncController: CharacterSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CharacterSyncController],
      providers: [CharacterSyncService]
    }).compile()

    characterSyncController = app.get<CharacterSyncController>(
      CharacterSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(characterSyncController.getHello()).toBe('Hello World!')
    })
  })
})
