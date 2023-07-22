import { Injectable } from '@nestjs/common'

@Injectable()
export class FwSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
