import { Injectable } from '@nestjs/common'

@Injectable()
export class WalletSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
