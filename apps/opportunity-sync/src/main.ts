import { NestFactory } from '@nestjs/core'
import { OpportunitySyncModule } from './opportunity-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(OpportunitySyncModule)
  await app.listen(3000)
}
bootstrap()
