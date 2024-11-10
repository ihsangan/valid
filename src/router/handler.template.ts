import { endpoint, headers, Result } from '../utils'

export default async function gameName(id: string): Promise<Result> {
  const body = `` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  return {
    success: true,
    game: '',
    id,
    name: data.confirmationFields.username
  }
}
