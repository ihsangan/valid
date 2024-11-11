import checkCache from './handler'

export default {
  fetch: async (request: Request): Promise<Response> => await checkCache(request)
}