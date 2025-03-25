import { hitCoda, Result } from '../utils'

export default async function mcgg(id: number, zone: number): Promise<Result> {
  const body = `voucherPricePoint.id=997117&voucherPricePoint.price=1579&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${zone}&voucherTypeName=106-MAGIC_CHESS&shopLang=id_ID` 
  const data = await hitCoda(body)
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'Magic Chess: Go Go',
      id,
      zone,
      name: data.confirmationFields.username
    }
  } else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}