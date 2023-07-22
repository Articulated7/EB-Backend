import { NestFactory } from '@nestjs/core'
import { ContactSyncModule } from './contact-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(ContactSyncModule)
  await app.listen(3000)
}
bootstrap()
