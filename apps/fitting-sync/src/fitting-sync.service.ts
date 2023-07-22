import { Injectable } from '@nestjs/common'

@Injectable()
export class FittingSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
