import { getUrl } from './utils';
import * as router from './router';

export default async function callAPI(request) {
  const url = getUrl(request);
  const path = url.pathname;
  const params = url.searchParams;
  let id = params.get('id');
  let zone = params.get('zone');

  try {
    if (!id) {
      return { success: false, message: 'Bad request' };
    }

    if (path.includes('/ff')) {
      return await router.ff(id);
    } 
    if (path.includes('/ml')) {
      return await router.ml(id, zone);
    } 
    if (path.includes('/gi')) {
      return await router.gi(id);
    } 
    if (path.includes('/hi')) {
      return await router.hi(id);
    } 
    if (path.includes('/hsr')) {
      return await router.hsr(id);
    } 
    if (path.includes('/pb')) {
      return await router.pb(id);
    } 
    if (path.includes('/sm')) {
      return await router.sm(id);
    }  
    if (path.includes('/sus')) {
      return await router.sus(id);
    } 
    if (path.includes('/aov')) {
      return await router.aov(id);
    } 
    if (path.includes('/cod')) {
      return await router.cod(id);
    } 
    if (path.includes('/valo')) {
      return await router.valo(id);
    } 
    if (path.includes('/pgr')) {
      return await router.pgr(id, zone);
    } 
    if (path.includes('/la')) {
      return await router.la(id, zone);
    } 
    else {
      return { success: false, message: 'Bad request' };
    }
  } catch (error) {
    return { success: false, message: 'Not found' };
  }
}