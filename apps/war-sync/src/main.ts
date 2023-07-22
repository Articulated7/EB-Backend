import { NestFactory } from '@nestjs/core'
import { WarSyncModule } from './war-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(WarSyncModule)
  await app.listen(3000)
}
bootstrap()
