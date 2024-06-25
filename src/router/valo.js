import { endpoint } from '../utils'

export default async function gameName(id) {
  const body = `voucherPricePoint.id=950510&voucherPricePoint.price=45000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=VALORANT&voucherTypeId=109&gvtId=139&shopLang=id_ID` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  const data = await response.json()
  if (data.success == true) {
    return { success: true, game: 'VALORANT', id: id, region: 'Indonesia', name: data.confirmationFields.username }
  } else if (data.errorCode == -200) {
    return { success: true, game: 'VALORANT', id: id, region: '', name: data.confirmationFields.userId }
  } else {
    return { success: false, message: 'Not found' }
  }
}
