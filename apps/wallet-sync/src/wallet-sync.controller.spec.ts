import { Test, TestingModule } from '@nestjs/testing'
import { WalletSyncController } from './wallet-sync.controller'
import { WalletSyncService } from './wallet-sync.service'

describe('WalletSyncController', () => {
  let walletSyncController: WalletSyncController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WalletSyncController],
      providers: [WalletSyncService]
    }).compile()

    walletSyncController = app.get<WalletSyncController>(WalletSyncController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(walletSyncController.getHello()).toBe('Hello World!')
    })
  })
})
