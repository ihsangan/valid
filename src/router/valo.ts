import { endpoint, headers, Result } from '../utils';

export default async function valo(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=950510&voucherPricePoint.price=45000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=VALORANT&voucherTypeId=109&gvtId=139&shopLang=id_ID`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  });
  const data = await response.json();
  if (data.success === true) {
    return {
      success: true,
      game: 'VALORANT',
      id,
      server: 'Indonesia',
      name: data.confirmationFields.username
    };
  } else if (data.errorCode === -200) {
    return {
      success: true,
      game: 'VALORANT',
      id,
      name: data.confirmationFields.userId
    };
  } else {
    return {
      success: false,
      message: 'Not found'
    };
  }
}