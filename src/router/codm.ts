import { hitCoda, Result } from '../utils'

export default async function codm(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=46114&voucherPricePoint.price=5000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=CALL_OF_DUTY&shopLang=id_ID&voucherTypeId=1&gvtId=90`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Call Of Duty Mobile',
    id,
    name: data.confirmationFields.roles[0].role
  }
}
