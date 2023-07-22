import { Controller, Get } from '@nestjs/common'
import { SkillSyncService } from './skill-sync.service'

@Controller()
export class SkillSyncController {
  constructor(private readonly skillSyncService: SkillSyncService) {}

  @Get()
  getHello(): string {
    return this.skillSyncService.getHello()
  }
}
