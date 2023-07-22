import { Injectable } from '@nestjs/common'

@Injectable()
export class CalendarSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
