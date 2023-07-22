import { Injectable } from '@nestjs/common'

@Injectable()
export class LocationSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
