import { Injectable } from '@nestjs/common'

@Injectable()
export class LoyaltySyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
