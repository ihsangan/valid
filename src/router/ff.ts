import { endpoint, headers, Result } from '../utils';

export default async function ff(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=8050&voucherPricePoint.price=1000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=FREEFIRE&shopLang=id_ID&voucherTypeId=1&gvtId=1`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });
  const data = await response.json();
  return {
    success: true,
    game: 'Garena Free Fire',
    id: Number(id),
    name: data.confirmationFields.roles[0].role
  };
}