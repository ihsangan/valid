import { endpoint, headers, Result } from '../utils';

export default async function sus(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=266077&voucherPricePoint.price=13000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=SUPER_SUS&shopLang=id_ID` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });
  const data = await response.json()
  return {
    success: true,
    game: 'Super Sus',
    id: Number(id),
    name: data.confirmationFields.username 
  };
}
