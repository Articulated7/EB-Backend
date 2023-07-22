import { Controller, Get } from '@nestjs/common'
import { CharacterSyncService } from './character-sync.service'

@Controller()
export class CharacterSyncController {
  constructor(private readonly characterSyncService: CharacterSyncService) {}

  @Get()
  getHello(): string {
    return this.characterSyncService.getHello()
  }
}
