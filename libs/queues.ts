import { BullModule } from '@nestjs/bullmq'

export const statusQueue = BullModule.registerQueue({
  name: 'status'
})
