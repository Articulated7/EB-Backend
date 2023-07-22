import { Injectable } from '@nestjs/common'

@Injectable()
export class CloneSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
