import { Module } from '@nestjs/common'
import { LoyaltySyncController } from './loyalty-sync.controller'
import { LoyaltySyncService } from './loyalty-sync.service'

@Module({
  imports: [],
  controllers: [LoyaltySyncController],
  providers: [LoyaltySyncService]
})
export class LoyaltySyncModule {}
