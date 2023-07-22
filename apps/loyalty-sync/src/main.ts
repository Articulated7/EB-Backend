import { NestFactory } from '@nestjs/core'
import { LoyaltySyncModule } from './loyalty-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(LoyaltySyncModule)
  await app.listen(3000)
}
bootstrap()
