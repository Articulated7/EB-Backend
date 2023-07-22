import { NestFactory } from '@nestjs/core'
import { SkillSyncModule } from './skill-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(SkillSyncModule)
  await app.listen(3000)
}
bootstrap()
