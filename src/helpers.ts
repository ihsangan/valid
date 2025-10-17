import { getParams, Result, allowedMethod } from './utils'
import callAPI from './routing'

export default async function serveResult(url: string): Promise<Response> {
  const { decode } = getParams(url)
  let status = 200
  let result: Result = await callAPI(url)
  if (result.name) {
    result.name = result.name.replace(/\u002B/g, '%20')
    if (decode === null || decode === 'true' || decode !== 'false') {
      result.name = decodeURIComponent(result.name)
    }
  }
  if (result.message === 'Bad request') {
    status = 400
  }
  if (result.message === 'Not found') {
    status = 404
  }
  return Response.json(result, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': allowedMethod.join(', '),
      'Access-Control-Expose-Headers': '*',
      'Cache-Control': 'public, max-age=30, s-maxage=43200, proxy-revalidate, immutable',
      'X-Powered-By': '@ihsangan/valid'
    }
  })
}