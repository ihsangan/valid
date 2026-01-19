import { hitCoda, Result } from '../utils'

export default async function ff(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=1032492&voucherPricePoint.price=11100&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=FREE_FIRE&shopLang=id_ID`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Garena Free Fire',
    id,
    name: data.confirmationFields.username
  }
}