import { endpoint } from '../utils'

export default async function coc(id) {
  if (!id.startsWith('#')) {
    id = `#${id}`
  }
  id = id.toUpperCase()
  const body = `voucherPricePoint.id=453696&voucherPricePoint.price=16000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=CLASH_OF_CLANS&shopLang=id_ID` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  const data = await response.json()
  return { success: true, game: 'Clash Of Clans', id: id, name:data.confirmationFields.username }
}
