import { hitCoda, Result } from '../utils'

export default async function aov(id: number): Promise<Result> {
  const body = `user.userId=${id}&voucherPricePoint.id=7946&voucherPricePoint.price=10000&shopLang=id_ID&voucherTypeName=AOV`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Garena: AOV (Arena Of Valor)',
    id,
    name: data.confirmationFields.roles[0].role,
    server: data.confirmationFields.roles[0].server
  }
}
