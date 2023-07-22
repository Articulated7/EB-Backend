import { Injectable } from '@nestjs/common'

@Injectable()
export class CharacterSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
