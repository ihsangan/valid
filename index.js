addEventListener('fetch', event => {
  event.respondWith(checkCache(event.request))
})
async function callAPI(request) {
  const url = new URL(request.url)
  const path = url.pathname
  const params = url.searchParams
  const endpoint = 'https://order-sg.codashop.com/initPayment.action'
  const id = params.get('id')
  const zone = params.get('zone')
  try {
  if (!id) {
    return `{"success":false,"message":"Bad Request"}`
  }
  if (path.includes('/gi') && id.startsWith('6')) {
    const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=os_usa&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`
    const request = new Request(endpoint, {
      method: 'POST',
      headers: {
	'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    const response = await fetch(request)
    const data = await response.json()
    let result = `{"success":true,"game":"Genshin Impact","server":"America","id":${id},"name":"${data.confirmationFields.username}"}`
    return result
  }
  if (path.includes('/gi') && id.startsWith('7')) {
    const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=os_euro&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`
    const request = new Request(endpoint, {
      method: 'POST',
      headers: {
	'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    const response = await fetch(request)
    const data = await response.json()
    let result = `{"success":true,"game":"Genshin Impact","server":"Europe","id":${id},"name":"${data.confirmationFields.username}"}`
    return result
  }
    if (path.includes('/gi') && id.startsWith('8')) {
    const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=os_asia&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`
    const request = new Request(endpoint, {
      method: 'POST',
      headers: {
	'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    const response = await fetch(request)
    const data = await response.json()
    let result = `{"success":true,"game":"Genshin Impact","server":"Asia","id":${id},"name":"${data.confirmationFields.username}"}`
    return result
    }
    if (path.includes('/gi') && id.startsWith('9')) {
    const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=os_cht&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`
    const request = new Request(endpoint, {
      method: 'POST',
      headers: {
	'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    const response = await fetch(request)
    const data = await response.json()
    let result = `{"success":true,"game":"Genshin Impact","server":"SAR (Taiwan, Hong Kong, Macao)","id":${id},"name":"${data.confirmationFields.username}"}`
    return result
    }
  if (path.includes('/ml') && !zone) {
    return `{"success":false,"message":"Bad Request"}`
  }
  if (path.includes('/ml')) {
    const body = `voucherPricePoint.id=4150&voucherPricePoint.price=1579.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${zone}&msisdn=&voucherTypeName=MOBILE_LEGENDS&shopLang=id_ID`
    const request = new Request(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    const response = await fetch(request)
    const data = await response.json()
    let result = `{"success":true,"game":"Mobile Legends: Bang Bang","id":${id},"zoneId":${zone},"name":"${data.confirmationFields.username}"}`
    return result
  }
  if (path.includes('/ff')) {
    const body = `voucherPricePoint.id=8050&voucherPricePoint.price=1000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=FREEFIRE&shopLang=id_ID`
    const request = new Request(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    const response = await fetch(request)
    const data = await response.json()
    let result = `{"success":true,"game":"Garena Free Fire","id":${id},"name":"${data.confirmationFields.roles[0].role}"}`
    return result
  }
  if (path.includes('/aov')) {
    const body = `voucherPricePoint.id=7946&voucherPricePoint.price=10000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=AOV&shopLang=id_ID`
    const request = new Request(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
    const response = await fetch(request)
    const data = await response.json()
    let result = `{"success":true,"game":"Garena AOV (Arena Of Valor)","id":${id},"name":"${data.confirmationFields.roles[0].role}"}`
    return result
  }
  else {
    let result = `{"success":false,"message":"Bad request"}`
    return result
  }
} catch (error) {
    let result = `{"success":false,"message":"Cannot find nickname from your request."}`
    return result
  }
}
async function serveResult(request) {
  let now = Date.now()
  let code = 200
  let result = await callAPI(request)
  if (result.includes('undefined')) {
    result = `{"success":false,"message":"Cannot find nickname from your request."}`
  }
  if (result.includes(`"success":false`)) {
    code = 400
  }
  result = result.replace(/\u002B/g, ' ')
  result = decodeURIComponent(result)
  let response = new Response(result, {
    status: code,
    headers: {
      'Cache-Control': 'public, max-age=600',
      'Content-Type': 'application/json; charset=utf-8',
    }
  })
  return response
}
async function checkCache(request) {
  let now = Date.now()
  let cache = caches.default
  let response = await cache.match(request)
  if (!response) {
    response = await serveResult(request)
    await cache.put(request, response.clone())
  }
  response.headers.append('X-Response-Time', Date.now() - now)
  return response
}
