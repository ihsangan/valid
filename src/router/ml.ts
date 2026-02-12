import { Result } from '../utils'

export default async function ml(user_id: string, zone_id: string): Promise<Result> {
  const payload = {
    shop_code: 'MOBILE_LEGENDS',
    data: {
      user_id,
      zone_id
    }
  }
  const result = await fetch('https://api-gw-prd.vocagame.com/gateway-ms/order/v1/client/transactions/verify', {
    method: 'POST',
    headers: {
      'content-type': 'apllication/json',
      'x-country': '1'
    },
    body: `{"shop_code":"MOBILE_LEGENDS","data":{"user_id":"1007909047","zone_id":"13044"}}`
  })
  //const result = await fetch(request)
  const data = await result.json()
  return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name: data.data.username
  }
}
