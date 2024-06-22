import checkCache from './helpers';

export default {
  async fetch(request) {
    return await checkCache(request)
  }
}
