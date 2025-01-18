export const endpoint = 'https://order-sg.codashop.com/initPayment.action'

export const allowedMethod = ['GET', 'HEAD']

export function getUrl(request: Request): URL {
  return new URL(request.url)
}

export function timeNow(): number {
  return Date.now()
}

export const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
})

export async function hitCoda(body) {
  const response = await fetch('https://order-sg.codashop.com/initPayment.action', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  return await response.json()
}

export interface Result {
  success: boolean
  game?: string
  id?: number | string
  server?: string | number,
  name?: string
  message?: string
}