import { timeNow } from './utils';
import serveResult from './helpers';

export default async function checkCache(request: Request): Promise<Response> {
  if (request.method === 'GET' || request.method === 'HEAD') {
    const now = timeNow();
    let cache = caches.default;
    let response = await cache.match(request.url);
    if (!response) {
      response = await serveResult(request);
      await cache.put(request.url, response.clone());
    }
    response = new Response(response.body, response);
    response.headers.append('X-Response-Time', (timeNow() - now).toString());
    return response;
  } else {
    return new Response(
      JSON.stringify({ success: false, message: 'Method not allowed' }), 
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        }
      }
    );
  }
}