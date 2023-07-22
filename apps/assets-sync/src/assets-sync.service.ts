import { Injectable } from '@nestjs/common'

@Injectable()
export class AssetsSyncService {
  getHello(): string {
    return 'Hello World!'
  }
}
