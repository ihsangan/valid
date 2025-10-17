export const allowedMethod = ['GET', 'HEAD', 'POST']

export function timeNow(): number {
  return Date.now()
}

export async function parseRequest(request: Request): Promise<string> {
  let url = new URL(request.url)
  if (request.method === 'POST') {
    const contentType = request.headers.get('content-type')
    let data: { [key: string]: string | null } = {}
    try {
      if (contentType && contentType.includes('application/json')) {
        data = await request.json()
      } else if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
        const formData = await request.formData()
        for (const [key, value] of formData.entries()) {
          data[key] = value
        }
      } else {
        return url.toString()
      }
      for (const key in data) {
        url.searchParams.set(key, data[key])
      }
      return url.toString()
    } catch (error) {
      return url.toString()
    }
  }
  return url.toString()
}

export function getParams(inputUrl: string): Params {
  const url = new URL(inputUrl)
  const urlParams = url.searchParams
  const params: Params = {
    path: url.pathname
  }
  for (const [key, value] of urlParams.entries()) {
    params[key] = value
  }
  return params
}

export async function hitCoda(body: string): Promise<unknown> {
  const response = await fetch('https://order-sg.codashop.com/initPayment.action', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  return await response.json()
}

interface Params{
  path: string
  id?: string
  server?: string
  zone?: string
  decode?: string
}

export interface Result {
  success: boolean
  game?: string
  id?: number | string
  server?: string | number
  name?: string
  message?: string
}