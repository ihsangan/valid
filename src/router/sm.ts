import { hitCoda, Result } from '../utils'

export default async function sus(id: string): Promise<Result> {
  const body = `voucherPricePoint.id=256513&voucherPricePoint.price=16000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=global-release&voucherTypeName=SAUSAGE_MAN&shopLang=id_ID`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Sausage Man',
    id,
    name: data.confirmationFields.username
  }
}
