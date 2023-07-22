import { Injectable } from '@nestjs/common'

@Injectable()
export class DogmaSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
