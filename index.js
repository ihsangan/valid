addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  const params = url.searchParams
  const method = request.method
  const headers = request.headers
if (path.includes('/ml')) {
	const id = params.get('id')
	const srv = params.get('server')
	const endpoint = 'https://order-sg.codashop.com/initPayment.action'
	const body = `voucherPricePoint.id=4150&voucherPricePoint.price=1565.0&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${srv}&msisdn=&voucherTypeName=MOBILE_LEGENDS&shopLang=id_ID`
	const request = new Request(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body
	})
	const response = await fetch(request)
	const data = `${response.body}`
	//const par = JSON.parse(data)
        //const obj = new Object(data).toString()
	//const user = par.result
	return new Response(JSON.parse(data).result, {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
	if (path.includes('/ff')) {
		const id = params.get('id')
		const endpoint = 'https://order-sg.codashop.com/initPayment.action'
		const body = `voucherPricePoint.id=8050&voucherPricePoint.price=1000.0&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=FREEFIRE&shopLang=id_ID`
		const request = new Request(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body
		})
		const response = await fetch(request)
		const data = JSON.stringify(response.body)
		const result = JSON.parse(data)
		const user = result.username
		return new Response(user, {
			status: 200,
			headers: {
				'Content-Type': 'text/plain'
			}
		})
	}
}


