import { NestFactory } from '@nestjs/core'
import { LocationSyncModule } from './location-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(LocationSyncModule)
  await app.listen(3000)
}
bootstrap()
