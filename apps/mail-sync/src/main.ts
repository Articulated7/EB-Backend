import { NestFactory } from '@nestjs/core'
import { MailSyncModule } from './mail-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(MailSyncModule)
  await app.listen(3000)
}
bootstrap()
