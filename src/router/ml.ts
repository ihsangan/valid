import { Result } from '../utils'

export default async function ml(user_id: string, zone_id: string): Promise<Result> {
  const payload = {
    code: 'MOBILE_LEGENDS',
    data: {
      userId: user_id,
      zoneId: zone_id
    }
  }
  const result = await fetch('https://gopay.co.id/games/v1/order/user-account', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      //'x-country': '1'
    },
    body: `{"code":"MOBILE_LEGENDS","data":{"userId":"1007909047","zoneId":"13044"}}`
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
