import { Test, TestingModule } from '@nestjs/testing'
import { CalendarSyncController } from './calendar-sync.controller'
import { CalendarSyncService } from './calendar-sync.service'

describe('CalendarSyncController', () => {
  let calendarSyncController: CalendarSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalendarSyncController],
      providers: [CalendarSyncService]
    }).compile()

    calendarSyncController = app.get<CalendarSyncController>(
      CalendarSyncController
    )
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(calendarSyncController.getHello()).toBe('Hello World!')
    })
  })
})
