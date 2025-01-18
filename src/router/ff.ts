import { hitCoda, Result } from '../utils'

export default async function ff(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=8050&voucherPricePoint.price=1000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=FREEFIRE&shopLang=id_ID&voucherTypeId=1&gvtId=1`
  const data = await hitCoda(body)
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'Garena Free Fire',
      id,
      name: data.confirmationFields.username
    }
  } else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}