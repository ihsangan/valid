import { hitCoda, Result } from '../utils'

export default async function codm(id: number): Promise<Result> {
  const body = `user.userId=${id}&voucherPricePoint.id=46129&voucherPricePoint.price=10000&shopLang=id_ID&voucherTypeName=CALL_OF_DUTY`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Call Of Duty Mobile',
    id,
    name: data.confirmationFields.roles[0].role,
    server: data.confirmationFields.roles[0].server
  }
}
