import { NestFactory } from '@nestjs/core'
import { AssetsSyncModule } from './assets-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(AssetsSyncModule)
  await app.listen(3000)
}
bootstrap()
