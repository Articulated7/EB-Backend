import { Module } from '@nestjs/common'
import { WalletSyncController } from './wallet-sync.controller'
import { WalletSyncService } from './wallet-sync.service'

@Module({
  imports: [],
  controllers: [WalletSyncController],
  providers: [WalletSyncService]
})
export class WalletSyncModule {}
