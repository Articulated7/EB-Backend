import { NestFactory } from '@nestjs/core'
import { CorporationSyncModule } from './corporation-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(CorporationSyncModule)
  await app.listen(3000)
}
bootstrap()
