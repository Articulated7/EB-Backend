import { NestFactory } from '@nestjs/core'
import { PiSyncModule } from './pi-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(PiSyncModule)
  await app.listen(3000)
}
bootstrap()
