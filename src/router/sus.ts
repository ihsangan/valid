import { hitCoda, Result } from '../utils'

export default async function sus(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=266077&voucherPricePoint.price=13000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=SUPER_SUS&shopLang=id_ID`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Super Sus',
    id,
    name: data.confirmationFields.username 
  }
}
