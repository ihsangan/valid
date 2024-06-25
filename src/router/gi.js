import { endpoint } from '../utils'

export default async function gi(id) {
  let sn = ''
  let sv = ''
  if (id. startsWith('6')) {
    sn = 'America'
    sv = 'os_usa'
  } else if (id.startsWith('7')) {
    sn = 'Europe'
    sv = 'os_euro'
  } else if (id.startsWith('8')) {
    sn = 'Asia'
     sv = 'os_asia'
  } else if (id.startsWith('9')) {
    sn = 'SAR (Taiwan, Hong Kong, Macao)'
    sv = 'os_cht'
  } else {
    return { success: false, message: 'Bad request' }
  }
  const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16500&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  const data = await response.json()
  return { success: true, game: 'Genshin Impact', id: Number(id), server: sn, name: data.confirmationFields.username }
}
