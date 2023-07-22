import { Injectable } from '@nestjs/common'

@Injectable()
export class MailSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
