import { NestFactory } from '@nestjs/core'
import { StatusSyncModule } from './status-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(StatusSyncModule)
  await app.listen(3001)
}
bootstrap()
