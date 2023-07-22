import { NestFactory } from '@nestjs/core'
import { BookmarkSyncModule } from './bookmark-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(BookmarkSyncModule)
  await app.listen(3000)
}
bootstrap()
