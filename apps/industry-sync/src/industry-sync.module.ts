import { Module } from '@nestjs/common'
import { IndustrySyncController } from './industry-sync.controller'
import { IndustrySyncService } from './industry-sync.service'

@Module({
  imports: [],
  controllers: [IndustrySyncController],
  providers: [IndustrySyncService]
})
export class IndustrySyncModule {}
