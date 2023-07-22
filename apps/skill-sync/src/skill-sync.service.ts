import { Injectable } from '@nestjs/common'

@Injectable()
export class SkillSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
