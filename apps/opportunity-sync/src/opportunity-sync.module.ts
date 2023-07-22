import { Module } from '@nestjs/common'
import { OpportunitySyncController } from './opportunity-sync.controller'
import { OpportunitySyncService } from './opportunity-sync.service'

@Module({
  imports: [],
  controllers: [OpportunitySyncController],
  providers: [OpportunitySyncService]
})
export class OpportunitySyncModule {}
