import { NestFactory } from '@nestjs/core'
import { CloneSyncModule } from './clone-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(CloneSyncModule)
  await app.listen(3000)
}
bootstrap()
