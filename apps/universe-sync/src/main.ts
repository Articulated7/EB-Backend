import { NestFactory } from '@nestjs/core'
import { UniverseSyncModule } from './universe-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(UniverseSyncModule)
  await app.listen(3001)
}
bootstrap()
