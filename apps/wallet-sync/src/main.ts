import { NestFactory } from '@nestjs/core'
import { WalletSyncModule } from './wallet-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(WalletSyncModule)
  await app.listen(3000)
}
bootstrap()
