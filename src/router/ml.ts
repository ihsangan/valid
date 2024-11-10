import { endpoint, headers, Result } from '../utils'

export default async function ml(id: number, zone: number): Promise<Result> {
  const body = `voucherPricePoint.id=4150&voucherPricePoint.price=1579&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${zone}&voucherTypeName=MOBILE_LEGENDS&shopLang=id_ID&voucherTypeId=1&gvtId=1` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name:data.confirmationFields.username
  }
}
