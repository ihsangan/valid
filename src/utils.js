function getUrl(request) {
  return new URL(request.url)
}

function timeNow() {
  return Date.now()
}

const endpoint = 'https://order-sg.codashop.com/initPayment.action'
const formH = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
})

export { getUrl, timeNow, endpoint, formH }
