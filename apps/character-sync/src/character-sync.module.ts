import { Module } from '@nestjs/common'
import { CharacterSyncController } from './character-sync.controller'
import { CharacterSyncService } from './character-sync.service'

@Module({
  imports: [],
  controllers: [CharacterSyncController],
  providers: [CharacterSyncService]
})
export class CharacterSyncModule {}
