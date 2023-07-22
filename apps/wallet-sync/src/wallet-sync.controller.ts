import { Controller, Get } from '@nestjs/common'
import { WalletSyncService } from './wallet-sync.service'

@Controller()
export class WalletSyncController {
  constructor(private readonly walletSyncService: WalletSyncService) {}

  @Get()
  getHello(): string {
    return this.walletSyncService.getHello()
  }
}
