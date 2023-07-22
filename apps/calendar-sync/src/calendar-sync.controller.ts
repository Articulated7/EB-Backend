import { Controller, Get } from '@nestjs/common'
import { CalendarSyncService } from './calendar-sync.service'

@Controller()
export class CalendarSyncController {
  constructor(private readonly calendarSyncService: CalendarSyncService) {}

  @Get()
  getHello(): string {
    return this.calendarSyncService.getHello()
  }
}
