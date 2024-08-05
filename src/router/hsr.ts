import { endpoint, headers, Result } from '../utils';

export default async function hsr(id: number): Promise<Result> {
  let sn = '';
  let sv = '';
  const idStr = id.toString();
  switch (idStr[0]) {
    case '6':
      sn = 'America';
      sv = 'prod_official_usa';
      break;
    case '7':
      sn = 'Europe';
      sv = 'prod_official_eur';
      break;
    case '8':
      sn = 'Asia';
      sv = 'prod_official_asia';
      break;
    case '9':
      sn = 'SAR (Taiwan, Hong Kong, Macao)';
      sv = 'prod_official_cht';
      break;
    default:
      return {
        success: false,
        message: 'Bad request',
      };
  }
  const body = `voucherPricePoint.id=855316&voucherPricePoint.price=16000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=HONKAI_STAR_RAIL&shopLang=id_ID`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });
  const data = await response.json();
  return {
    success: true,
    game: 'Honkai: Star Rail',
    id: Number(id),
    server: sn,
    name: data.confirmationFields.username
  };
}