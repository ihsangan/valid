import { getUrl, Result } from './utils';
import * as router from './router';

export default async function callAPI(request: Request): Promise<Result> {
  const url = getUrl(request);
  const path = url.pathname;
  const params = url.searchParams;
  const id = params.get('id');
  const zone = params.get('zone');
  if (!id) {
    return { success: false, message: 'Bad request' };
  }
  try {
    let result: Result;
    switch (true) {
      case path.includes('/ff'):
        result = await router.ff(id);
        break;
      case path.includes('/ml'):
        result = await router.ml(id, zone);
        break;
      case path.includes('/gi'):
        result = await router.gi(id);
        break;
      case path.includes('/hi'):
        result = await router.hi(id);
        break;
      case path.includes('/hsr'):
        result = await router.hsr(id);
        break;
      case path.includes('/pb'):
        result = await router.pb(id);
        break;
      case path.includes('/sm'):
        result = await router.sm(id);
        break;
      case path.includes('/sus'):
        result = await router.sus(id);
        break;
      case path.includes('/aov'):
        result = await router.aov(id);
        break;
      case path.includes('/cod'):
        result = await router.cod(id);
        break;
      case path.includes('/valo'):
        result = await router.valo(id);
        break;
      case path.includes('/pgr'):
        result = await router.pgr(id, zone);
        break;
      case path.includes('/la'):
        result = await router.la(id, zone);
        break;
      default:
        result = { success: false, message: 'Bad request' };
    }
    return result;
  } catch (error) {
    return { success: false, message: 'Not found' };
  }
}