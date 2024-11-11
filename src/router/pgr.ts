import { endpoint, headers, Result } from '../utils'

export default async function pgr(id: number, zone: string): Promise<Result> {
  let sn = ''
  let sv = ''
  switch (zone.toLowerCase()) {
    case 'ap':
      sn = 'Asia-Pacific'
      sv = '5000'
      break
    case 'eu':
      sn = 'Europe'
      sv = '5001'
      break
    case 'na':
      sn = 'North America'
      sv = '5002'
      break
    default:
      return {
        success: false,
        message: 'Bad request',
      }
  }
  const body = `voucherPricePoint.id=259947&voucherPricePoint.price=15000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=PUNISHING_GRAY_RAVEN&shopLang=id_ID`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  return {
    success: true,
    game: 'Punishing: Gray Raven',
    id,
    server: sn,
    name: data.confirmationFields.username
  }
}