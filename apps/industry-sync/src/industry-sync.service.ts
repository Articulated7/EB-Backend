import { Injectable } from '@nestjs/common'

@Injectable()
export class IndustrySyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
