import { getUrl, Result } from './utils';
import callAPI from './routing';

export default async function serveResult(request: Request): Promise<Response> {
  const dc = getUrl(request).searchParams.get('decode');
  let code = 200;
  let result: Result = await callAPI(request);
  if (result.name !== undefined) {
    result.name = result.name.replace(/\u002B/g, '%20');
    if (dc === null || dc === 'true') {
      result.name = decodeURIComponent(result.name);
    }
  } else if (result.name === undefined || (!result.name && result.success)) {
    result = { success: false, message: 'Not found' };
  }
  if (result.message === 'Bad request') {
    code = 400;
    delete result.name;
  }
  if (result.message === 'Not found') {
    code = 404;
    delete result.name;
  }
  const response = new Response(JSON.stringify(result), {
    status: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD',
      'CDN-Cache-Control': 'max-age=43200, proxy-revalidate, immutable',
      'Content-Type': 'application/json; charset=utf-8',
    }
  });
  return response;
}