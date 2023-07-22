import { NestFactory } from '@nestjs/core'
import { MarketSyncModule } from './market-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(MarketSyncModule)
  await app.listen(3000)
}
bootstrap()
