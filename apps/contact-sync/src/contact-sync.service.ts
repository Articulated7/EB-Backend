import { Injectable } from '@nestjs/common'

@Injectable()
export class ContactSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
