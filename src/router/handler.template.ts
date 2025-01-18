import { hitCoda, Result } from '../utils'

export default async function gameName(id: string): Promise<Result> {
  const body = `` 
  const data = await hitCoda(body)
  return {
    success: true,
    game: '',
    id,
    name: data.confirmationFields.username
  }
}
