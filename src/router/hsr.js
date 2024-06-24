import { endpoint } from '../utils'

export default async function hsr(id) {
  let sn = ''
  let sv = ''
  if (id.startsWith("6")) {
    sn = "America";
    sv = "prod_official_usa";
  } else if (id.startsWith("7")) {
    sn = "Europe";
    sv = "prod_official_eur";
  } else if (id.startsWith("8")) {
    sn = "Asia";
    sv = "prod_official_asia";
  } else if (id.startsWith("9")) {
    sn = "SAR (Taiwan, Hong Kong, Macao)";
    sv = "prod_official_cht";
  } else {
    return {  success: false,  message: 'Bad request' }
  }
  const body = `voucherPricePoint.id=855316&voucherPricePoint.price=16000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=HONKAI_STAR_RAIL&shopLang=id_ID` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  const data = await response.json()
  return { success: true, game: 'Honkai: Star Rail', id: Number(id), server: sn, name:data.confirmationFields.username }
}
