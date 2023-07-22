import { NestFactory } from '@nestjs/core'
import { IncursionSyncModule } from './incursion-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(IncursionSyncModule)
  await app.listen(3000)
}
bootstrap()
