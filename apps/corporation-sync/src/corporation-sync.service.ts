import { Injectable } from '@nestjs/common'

@Injectable()
export class CorporationSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
