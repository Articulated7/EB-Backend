import { NestFactory } from '@nestjs/core'
import { CalendarSyncModule } from './calendar-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(CalendarSyncModule)
  await app.listen(3000)
}
bootstrap()
