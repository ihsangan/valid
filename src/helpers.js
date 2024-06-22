import { timeNow } from './utils'
import callAPI from './routing'

export default async function checkCache(request) {
  if (request.method == 'GET' || request.method == 'HEAD') {
    const now = timeNow()
    let cache = caches.default
    let response = await cache.match(request.url)
    if (!response) {
      response = await serveResult(request)
      await cache.put(request.url, response.clone())
    }
    response = new Response(response.body, response)
    response.headers.delete('Cache-Control')
    response.headers.append('X-Response-Time', timeNow() - now)
    return response
  }
  else {
    return new Response('Method Not Allowed', {
      status: 405
    })
  }
}

async function serveResult(request) {
  let dc = new URL(request.url).searchParams.get('decode')
  let code = 200
  let result = await callAPI(request)
  if (result.name != undefined) {
    result.name = result.name.replace(/\u002B/g, '%20')
    if (dc == false) {
    result = result
    }
    if (!dc || dc == true) {
    result.name = decodeURIComponent(result.name)
    }
  }
  else if (result.name = undefined || !result.name && result.success == true) {
    result = {success:false,message:"Not found"}
  }
  if (result.success == false) {
    code = 400
    delete result.name
  }
  let response = new Response(JSON.stringify(result), {
    status: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': 'GET, HEAD',
      'Cache-Control': 'public, max-age=120',
      'Content-Type': 'application/json; charset=utf-8',
    }
  })
  return response
}
