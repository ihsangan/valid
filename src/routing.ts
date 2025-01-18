import { getUrl, Result } from './utils'
import * as router from './router'

export default async function callAPI(request: Request): Promise<Result> {
  const url = getUrl(request)
  const path = url.pathname
  const params = url.searchParams
  const id = params.get('id')
  const server = params.get('zone') || params.get('server')
  if (!id) {
    return {
      success: false,
      message: 'Bad request' 
    }
  }
  try {
    switch (true) {
      case path.includes('/ag'):
        return await router.ag(Number(id))
      case path.includes('/aov'):
        return await router.aov(Number(id))
      case path.includes('/cod'):
        return await router.cod(Number(id))
      case path.includes('/ff'):
        return await router.ff(Number(id))
      case path.includes('/gi'):
        return await router.gi(Number(id))
      case path.includes('/hi'):
        return await router.hi(Number(id))
      case path.includes('/hsr'):
        return await router.hsr(Number(id))
      case path.includes('/la'):
        return await router.la(Number(id), server)
      case path.includes('/ld'):
        return await router.lad(Number(id))
      case path.includes('/ml'):
        return await router.ml(Number(id), Number(server))
      case path.includes('/pb'):
        return await router.pb(id)
      case path.includes('/pgr'):
        return await router.pgr(Number(id), server)
      case path.includes('/sm'):
        return await router.sm(id)
      case path.includes('/sus'):
        return await router.sus(Number(id))
      case path.includes('/valo'):
        return await router.valo(id)
      case path.includes('/zzz'):
        return await router.zzz(Number(id))
      default:
        return {
          success: false,
          message: 'Bad request'
        }
    }
  } catch (error) {
    return {
      success: false,
      message: 'Not found'
    }
  }
}