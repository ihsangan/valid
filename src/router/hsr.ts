import { hitCoda, Result } from '../utils'

export default async function hsr(id: number): Promise<Result> {
  let sn
  let sv
  const idStr = id.toString()
  switch (idStr[0]) {
    case '6':
      sn = 'America'
      sv = 'prod_official_usa'
      break
    case '7':
      sn = 'Europe'
      sv = 'prod_official_eur'
      break
    case '8':
      sn = 'Asia'
      sv = 'prod_official_asia'
      break
    case '9':
      sn = 'SAR (Taiwan, Hong Kong, Macao)'
      sv = 'prod_official_cht'
      break
    default:
      return {
        success: false,
        message: 'Not found',
      }
  }
  const body = `voucherPricePoint.id=855316&voucherPricePoint.price=16000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=HONKAI_STAR_RAIL&shopLang=id_ID`
  const data = await hitCoda(body)
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'Honkai: Star Rail',
      id,
      server: sn,
      name: data.confirmationFields.username
    }
  }
  else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}