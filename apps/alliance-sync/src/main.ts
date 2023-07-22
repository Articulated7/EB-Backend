import { NestFactory } from '@nestjs/core'
import { AllianceSyncModule } from './alliance-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(AllianceSyncModule)
  await app.listen(3000)
}
bootstrap()
