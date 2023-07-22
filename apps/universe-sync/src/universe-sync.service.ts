import { Injectable } from '@nestjs/common'

@Injectable()
export class UniverseSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
