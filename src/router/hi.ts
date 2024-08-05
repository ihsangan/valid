import { endpoint, headers, Result } from '../utils';

export default async function hi(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=48160&voucherPricePoint.price=16500&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=HONKAI_IMPACT&shopLang=id_ID`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });
  const data = await response.json();
  return {
    success: true,
    game: 'Honkai Impact 3rd',
    id: Number(id),
    name: data.confirmationFields.username
  };
}