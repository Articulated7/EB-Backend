import { Module } from '@nestjs/common'
import { DogmaSyncController } from './dogma-sync.controller'
import { DogmaSyncService } from './dogma-sync.service'

@Module({
  imports: [],
  controllers: [DogmaSyncController],
  providers: [DogmaSyncService]
})
export class DogmaSyncModule {}
