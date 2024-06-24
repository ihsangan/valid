import { endpoint } from '../utils'

export default async function pgr(id, zone) {
  let sn = ''
  let sv = ''
  if (zone.toLowerCase().includes('ap')) {
    sn = 'Asia-Pacific'
    sv = '5000'
  } else if (zone.toLowerCase().includes('eu')) {
    sn = 'Europe'
    sv = '5001'
  } else if (zone.toLowerCase().includes('na')) {
    sn = 'North America'
    sv = '5002'
  } else {
    return { success: false, message: 'Bad request' }
  }
  const body = `voucherPricePoint.id=259947&voucherPricePoint.price=15136&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=PUNISHING_GRAY_RAVEN&shopLang=id_ID` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  const data = await response.json()
  return { success: true, game: 'Punishing: Gray Raven', id: Number(id), server: sn, name:data.confirmationFields.username }
}
