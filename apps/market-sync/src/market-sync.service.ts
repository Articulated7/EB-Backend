import { Injectable } from '@nestjs/common'

@Injectable()
export class MarketSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
