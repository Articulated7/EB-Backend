import { Module } from '@nestjs/common'
import { CalendarSyncController } from './calendar-sync.controller'
import { CalendarSyncService } from './calendar-sync.service'

@Module({
  imports: [],
  controllers: [CalendarSyncController],
  providers: [CalendarSyncService]
})
export class CalendarSyncModule {}
