import { NestFactory } from '@nestjs/core'
import { CharacterSyncModule } from './character-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(CharacterSyncModule)
  await app.listen(3000)
}
bootstrap()
