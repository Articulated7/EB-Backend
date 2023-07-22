import { NestFactory } from '@nestjs/core'
import { FittingSyncModule } from './fitting-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(FittingSyncModule)
  await app.listen(3000)
}
bootstrap()
