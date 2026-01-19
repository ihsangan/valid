import { hitCoda, Result } from '../utils'

export default async function codm(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=1032849&voucherPricePoint.price=11100&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=CALL_OF_DUTY%3AMOBILE&shopLang=id_ID`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Call Of Duty Mobile',
    id,
    name: data.confirmationFields.username
  }
}
