import { hitCoda, Result } from '../utils'

export default async function aov(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=7946&voucherPricePoint.price=10000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=AOV&shopLang=id_ID&voucherTypeId=1&gvtId=1`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Garena: AOV (Arena Of Valor)',
    id,
    name: data.confirmationFields.roles[0].role
  }
}
