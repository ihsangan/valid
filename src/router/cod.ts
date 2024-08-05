import { endpoint, headers, Result } from '../utils';

export default async function cod(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=46114&voucherPricePoint.price=5000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=CALL_OF_DUTY&shopLang=id_ID&voucherTypeId=1&gvtId=1` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });
  const data = await response.json()
  return {
    success: true,
    game: 'Call Of Duty',
    id,
    name: data.confirmationFields.roles[0].role
  };
}
