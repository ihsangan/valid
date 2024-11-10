import checkCache from './handler'

export default {
  async fetch(request: Request): Promise<Response> {
    return await checkCache(request)
  }
}