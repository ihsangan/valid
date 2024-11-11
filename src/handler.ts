import { allowedMethod, timeNow } from './utils'
import serveResult from './helpers'

export default async function checkCache(request: Request): Promise<Response> {
  const now = timeNow()
  if (allowedMethod.indexOf(request.method) === -1) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Method not allowed'
    }), {
      status: 405,
      headers: {
        'Allow': allowedMethod.join(', '),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': allowedMethod.join(', '),
        'Content-Type': 'application/json; charset=utf-8',
        'X-Powered-By': '@ihsangan/valid'
      }
    })
  }
  let cache = caches.default
  let response = await cache.match(request.url)
  if (!response) {
    response = await serveResult(request)
    await cache.put(request.url, response.clone())
  }
  response = new Response(response.body, response)
  response.headers.set('X-Response-Time', timeNow() - now)
  return response
}