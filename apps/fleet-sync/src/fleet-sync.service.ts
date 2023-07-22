import { Injectable } from '@nestjs/common'

@Injectable()
export class FleetSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
