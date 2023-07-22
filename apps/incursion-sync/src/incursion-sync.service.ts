import { Injectable } from '@nestjs/common'

@Injectable()
export class IncursionSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
