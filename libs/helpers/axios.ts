import { AxiosInstance } from 'axios'

export const getPageCount = async (
  client: AxiosInstance,
  url: string
): Promise<number> => {
  const pagesRes = await client.get(url)

  return Number(pagesRes.headers['x-pages'])
}
