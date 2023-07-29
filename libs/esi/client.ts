import { EVEClient } from './EVEClient'
import { AxiosHttpRequestWithRetry } from './core/client'

const publicClient = (): EVEClient => {
  return new EVEClient({}, AxiosHttpRequestWithRetry)
}

const authenticatedClient = (token: string): EVEClient => {
  return new EVEClient({ TOKEN: token }, AxiosHttpRequestWithRetry)
}

export { publicClient, authenticatedClient }
