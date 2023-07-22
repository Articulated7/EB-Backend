import { Injectable } from '@nestjs/common'

@Injectable()
export class BookmarkSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
