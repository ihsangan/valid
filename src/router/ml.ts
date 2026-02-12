import { Result } from '../utils'

export default async function ml(userId: string, zoneId: string): Promise<Result> {
  const payload = {
    code: 'MOBILE_LEGENDS',
    data: {
      userId,
      zoneId
    }
  }
  const result = await fetch('https://gopay.co.id/games/v1/order/user-account', {
    method: 'POST',
    headers: {
      'content-type': 'apllication/json',
    },
    body: JSON.stringify(payload)
  })
  const data = await result.json()
  return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name: data.data.username
  }
}
