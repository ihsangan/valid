import { hitCoda, Result } from '../utils'

export default async function zzz(id: number): Promise<Result> {
  let sn = ''
  let sv = ''
  const idStr = id.toString().substring(0, 2)
  switch (idStr) {
    case '10':
      sn = 'America'
      sv = 'prod_gf_us'
      break
    case '13':
      sn = 'Asia'
      sv = 'prod_gf_jp'
      break
    case '15':
      sn = 'Europe'
      sv = 'prod_gf_eu'
      break
    case '17':
      sn = 'SAR (Taiwan, Hong Kong, Macao)'
      sv = 'prod_gf_sg'
      break
    default:
      return {
        success: false,
        message: 'Bad request'
      }
  }
  const body = `voucherPricePoint.id=946399&voucherPricePoint.price=16000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=ZENLESS_ZONE_ZERO&shopLang=id_ID`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Zenless Zone Zero',
    id,
    server: sn,
    name: data.confirmationFields.username
  }
}