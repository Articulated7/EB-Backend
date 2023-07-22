import { Test, TestingModule } from '@nestjs/testing'
import { SkillSyncController } from './skill-sync.controller'
import { SkillSyncService } from './skill-sync.service'

describe('SkillSyncController', () => {
  let skillSyncController: SkillSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SkillSyncController],
      providers: [SkillSyncService]
    }).compile()

    skillSyncController = app.get<SkillSyncController>(SkillSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(skillSyncController.getHello()).toBe('Hello World!')
    })
  })
})
