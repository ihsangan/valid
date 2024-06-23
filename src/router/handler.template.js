import { endpoint } from '../utils'

export default async function gameName(id) {
  const body = `` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  const data = await response.json()
  return { success: true, game: "", id: id, name:data.confirmationFields.username }
}
