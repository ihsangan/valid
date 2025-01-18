import { hitCoda, Result } from '../utils'

export default async function valo(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=973634&voucherPricePoint.price=56000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=VALORANT&voucherTypeId=109&gvtId=139&shopLang=id_ID`
  const data = await hitCoda(body)
  if (data.success === true) {
    return {
      success: true,
      game: 'VALORANT',
      id,
      server: 'Indonesia',
      name: data.confirmationFields.username
    }
  } else if (data.errorCode === -200) {
    return {
      success: true,
      game: 'VALORANT',
      id,
      name: id
    }
  } else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}