import { NestFactory } from '@nestjs/core'
import { IndustrySyncModule } from './industry-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(IndustrySyncModule)
  await app.listen(3000)
}
bootstrap()
