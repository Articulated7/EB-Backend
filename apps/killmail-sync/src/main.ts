import { NestFactory } from '@nestjs/core'
import { KillmailSyncModule } from './killmail-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(KillmailSyncModule)
  await app.listen(3000)
}
bootstrap()
