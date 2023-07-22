import { Injectable } from '@nestjs/common'

@Injectable()
export class SovSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
