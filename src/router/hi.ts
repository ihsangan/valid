import { hitCoda, Result } from '../utils'

export default async function hi(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=48250&voucherPricePoint.price=16500&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=HONKAI_IMPACT&shopLang=id_ID`
  const data = await hitCoda(body)
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'Honkai Impact 3rd',
      id,
      name: data.confirmationFields.username
    }
  }
  else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}