import { NestFactory } from '@nestjs/core'
import { FwSyncModule } from './fw-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(FwSyncModule)
  await app.listen(3000)
}
bootstrap()
