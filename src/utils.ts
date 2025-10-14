export const allowedMethod = ['GET', 'HEAD']

export function getUrl(request: Request): URL {
  return new URL(request.url)
}

export function timeNow(): number {
  return Date.now()
}

export async function parseRequest(request: Request): Promise<{ id: string | null; server: string | null }> {
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
        return { id: null, server: null }
      }
      return {
        id: data.id || null,
        server: data.zone || data.server || null,
      }
    } catch (error) {
      return { id: null, server: null }
    }
  }
  const url = getUrl(request)
  const params = url.searchParams
  return {
    id: params.get('id') || null,
    server: params.get('zone') || params.get('server') || null,
  }
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

export interface Result {
  success: boolean
  game?: string
  id?: number | string
  server?: string | number,
  name?: string
  message?: string
}