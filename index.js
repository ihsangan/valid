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
    if (path.includes('/hsr')) {
      if (id. startsWith('6')) {
        sn = 'America'
        sv = 'prod_official_usa'
      } else if (id.startsWith('7')) {
        sn = 'Europe'
        sv = 'prod_official_eur'
      } else if (id.startsWith('8')) {
        sn = 'Asia'
        sv = 'prod_official_asia'
      } else if (id.startsWith('9')) {
        sn = 'SAR (Taiwan, Hong Kong, Macao)'
        sv = 'prod_official_cht'
      } else {
        return `{"success":false,"message":"Bad request"}`
      }
      const body = `voucherPricePoint.id=855316&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=HONKAI_STAR_RAIL&shopLang=id_ID`
      const request = new Request(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const response = await fetch(request)
      const data = await response.json()
      let result = `{"success":true,"game":"Honkai: Star Rail","server":"${sn}","id":${id},"name":"${data.confirmationFields.username}"}`
      return result
    }
    if (path.includes('/gi')) {
      if (id. startsWith('6')) {
        sn = 'America'
        sv = 'os_usa'
      } else if (id.startsWith('7')) {
        sn = 'Europe'
        sv = 'os_euro'
      } else if (id.startsWith('8')) {
        sn = 'Asia'
        sv = 'os_asia'
      } else if (id.startsWith('9')) {
        sn = 'SAR (Taiwan, Hong Kong, Macao)'
        sv = 'os_cht'
      } else {
        return `{"success":false,"message":"Bad request"}`
      }
      const body = `voucherPricePoint.id=116054&voucherPricePoint.price=16500.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=GENSHIN_IMPACT&shopLang=id_ID`
      const request = new Request(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const response = await fetch(request)
      const data = await response.json()
      let result = `{"success":true,"game":"Genshin Impact","server":"${sn}","id":${id},"name":"${data.confirmationFields.username}"}`
      return result
    }
    if (path.includes('/hi')) {
      const body = `voucherPricePoint.id=48160&voucherPricePoint.price=16500.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=HONKAI_IMPACT&shopLang=id_ID`
      const request = new Request(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const response = await fetch(request)
      const data = await response.json()
      let result = `{"success":true,"game":"Honkai Impact 3rd","id":${id},"name":"${data.confirmationFields.username}"}`
      return result
    }
    if (path.includes('/ml') && !zone) {
      return `{"success":false,"message":"Bad Request"}`
    }
    if (path.includes('/ml')) {
      const body = `voucherPricePoint.id=4150&voucherPricePoint.price=1579.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${zone}&voucherTypeName=MOBILE_LEGENDS&shopLang=id_ID&voucherTypeId=1&gvtId=1`
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
    if (path.includes('/sm')) {
      const body = `voucherPricePoint.id=256513&voucherPricePoint.price=16000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=global-release&voucherTypeName=SAUSAGE_MAN&shopLang=id_ID`
      const request = new Request(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const response = await fetch(request)
      const data = await response.json()
      let result = `{"success":true,"game":"Sausage Man","id":"${id}","name":"${data.confirmationFields.username}"}`
      return result
    }
    if (path.includes('/ff')) {
      const body = `voucherPricePoint.id=8050&voucherPricePoint.price=1000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=FREEFIRE&shopLang=id_ID&voucherTypeId=1&gvtId=1`
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
    if (path.includes('/cod')) {
      const body = `voucherPricePoint.id=46114&voucherPricePoint.price=5000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=CALL_OF_DUTY&shopLang=id_ID&voucherTypeId=1&gvtId=1`
      const request = new Request(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const response = await fetch(request)
      const data = await response.json()
      let result = `{"success":true,"game":"Call Of Duty","id":${id},"name":"${data.confirmationFields.roles[0].role}"}`
      return result
    }
    if (path.includes('/aov')) {
      const body = `voucherPricePoint.id=7946&voucherPricePoint.price=10000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=AOV&shopLang=id_ID&voucherTypeId=1&gvtId=1`
      const request = new Request(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const response = await fetch(request)
      const data = await response.json()
      let result = `{"success":true,"game":"Garena AOV (Arena of Valor)","id":${id},"name":"${data.confirmationFields.roles[0].role}"}`
      return result
    }
    if (path.includes('/sus')) {
      const body = `voucherPricePoint.id=266077&voucherPricePoint.price=13000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=SUPER_SUS&shopLang=id_ID`
      const request = new Request(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      })
      const response = await fetch(request)
      const data = await response.json()
      let result = `{"success":true,"game":"Super Sus","id":${id},"name":"${data.confirmationFields.username}"}`
      return result
    }
    else {
      let result = `{"success":false,"message":"Bad request"}`
      return result
    }
  }
  catch (error) {
    let result = `{"success":false,"message":"Cannot find nickname from your request."}`
    return result
  }
}
async function serveResult(request) {
  let dc = new URL(request.url).searchParams.get('decode')
  let code = 200
  let result = await callAPI(request)
  if (JSON.parse(result).name == undefined) {
    result = `{"success":false,"message":"Cannot find nickname from your request."}`
  }
  if (JSON.parse(result).success == false) {
    code = 400
  }
  result = result.replace(/\u002B/g, ' ')
  if (dc == false) {
    result = result
  }
  if (!dc || dc == true || dc) {
    result = decodeURIComponent(result)
  }
  let response = new Response(result, {
    status: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': 'GET',
      'Cache-Control': 'max-age=600',
      'Content-Type': 'application/json; charset=utf-8',
    }
  })
  return response
}
async function checkCache(request) {
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', {
      status: 405
    })
  }
  let now = Date.now()
  let cache = caches.default
  let response = await cache.match(request.url)
  if (!response) {
    response = await serveResult(request)
    await cache.put(request.url, response.clone())
  }
  response = new Response(response.body, response)
  response.headers.delete('Cache-Control')
  response.headers.append('X-Response-Time', Date.now() - now)
  return response
}
