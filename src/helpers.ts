import { getUrl, Result, allowedMethod } from './utils'
import callAPI from './routing'

export default async function serveResult(request: Request): Promise<Response> {
  const dc = getUrl(request).searchParams.get('decode')
  let code = 200
  let result: Result = await callAPI(request);
  if (result.name) {
    result.name = result.name.replace(/\u002B/g, '%20')
    if (dc === null || dc === 'true' || dc !== 'false') {
      result.name = decodeURIComponent(result.name)
    }
  }
  if (result.message === 'Bad request') {
    code = 400
  }
  if (result.message === 'Not found') {
    code = 404
  }
  const response = new Response(JSON.stringify(result), {
    status: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': allowedMethod.join(', '),
      'Access-Control-Expose-Headers': '*',
      'Cache-Control': 'public, max-age=30, s-maxage=43200, proxy-revalidate, immutable',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Powered-By': '@ihsangan/valid'
    }
  })
  return response
}