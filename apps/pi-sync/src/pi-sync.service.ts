import { Injectable } from '@nestjs/common'

@Injectable()
export class PiSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
