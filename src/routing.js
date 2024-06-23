import { getUrl, endpoint } from './utils'
import ff from './router/ff'
import ml from './router/ml'
import coc from './router/coc'

export default async function callAPI(request) {
  const url = getUrl(request)
  const path = url.pathname
  const params = url.searchParams
  let id = params.get('id')
  let zone = params.get('zone')
  try {
    if (!id) {
      return { success: false, message: 'Bad request' }
    } if (path.includes('/ff')) {
      return await ff(id)
    } if (path.includes('/ml')) {
      return await ml(id, zone)
    } if (path.includes('/coc')) {
      return await coc(id)
    } else {
      return { success: false, message: 'Bad request' }
    }
  } catch (error) {
    return { success: false, message: 'Not found' }
  }
}
