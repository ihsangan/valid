import { Result } from '../utils'

export default async function ff(id: number): Promise<Result> {
  const request = await fetch(`https://gopay.co.id/games/v1/order/prepare/FREEFIRE?userId=${id}`)
  const data = await request.json()
  return {
    success: true,
    game: 'Garena Free Fire',
    id,
    name: data.data
  }
}