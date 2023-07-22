import { NestFactory } from '@nestjs/core'
import { SovSyncModule } from './sov-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(SovSyncModule)
  await app.listen(3000)
}
bootstrap()
