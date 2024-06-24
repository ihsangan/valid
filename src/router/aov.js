import { endpoint } from '../utils'

export default async function aov(id) {
  const body = `voucherPricePoint.id=7946&voucherPricePoint.price=10000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=AOV&shopLang=id_ID&voucherTypeId=1&gvtId=1` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  const data = await response.json()
  return { success: true, game: 'Garena: AOV (Arena Of Valor)', id: Number(id), name:data.confirmationFields.roles[0].role }
}
