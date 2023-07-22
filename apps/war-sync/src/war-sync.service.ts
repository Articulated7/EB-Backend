import { Injectable } from '@nestjs/common'

@Injectable()
export class WarSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
