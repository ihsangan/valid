import { hitVoca, Result } from '../utils'

export default async function ml(id: string, zone: string): Promise<Result> {
  const payload = {
    shop_code: "MOBILE_LEGENDS",
    data: {
      user_id: id,
      zone_id: zone
  }}
  const data = await hitVoca(JSON.stringify(payload))
  return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name: data.username
  }
}
