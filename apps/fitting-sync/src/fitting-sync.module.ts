import { Module } from '@nestjs/common'
import { FittingSyncController } from './fitting-sync.controller'
import { FittingSyncService } from './fitting-sync.service'

@Module({
  imports: [],
  controllers: [FittingSyncController],
  providers: [FittingSyncService]
})
export class FittingSyncModule {}
