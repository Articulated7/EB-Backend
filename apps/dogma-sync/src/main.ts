import { NestFactory } from '@nestjs/core'
import { DogmaSyncModule } from './dogma-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(DogmaSyncModule)
  await app.listen(3000)
}
bootstrap()
