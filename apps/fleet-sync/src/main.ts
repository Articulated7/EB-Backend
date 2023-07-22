import { NestFactory } from '@nestjs/core'
import { FleetSyncModule } from './fleet-sync.module'

async function bootstrap() {
  const app = await NestFactory.create(FleetSyncModule)
  await app.listen(3000)
}
bootstrap()
