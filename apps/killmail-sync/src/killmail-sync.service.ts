import { Injectable } from '@nestjs/common'

@Injectable()
export class KillmailSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
