import { endpoint, headers, Result } from '../utils';

export default async function pb(id: string): Promise<Result> {
  const body = `voucherPricePoint.id=54700&voucherPricePoint.price=11000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=POINT_BLANK&shopLang=id_ID`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });
  const data = await response.json();
  return {
    success: true,
    game: 'Point Blank',
    id,
    name: data.confirmationFields.username
  };
}