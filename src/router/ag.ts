import { endpoint, headers, Result } from '../utils'

export default async function ag(id: number): Promise<Result> {
  const JWT1 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkeW5hbWljU2t1SW5mbyI6IntcInNrdUlkXCI6XCJjb20ueW9zdGFyLmFldGhlcmdhemVyLnNoaWZ0aW5nZmxvd2VyMVwiLFwiZXZlbnRQYWNrYWdlXCI6XCIwXCIsXCJkZW5vbUltYWdlVXJsXCI6XCJodHRwczovL2NkbjEuY29kYXNob3AuY29tL2ltYWdlcy81NDdfM2QyMTBiNzUtNTJkYi00YjUxLTgzMGYtZDYxMTFiNjFkNDQ5X0FFVEhFUiBHQVpFUl9pbWFnZS9Db2RhX0FHX1NLVWltYWdlcy82MC5wbmdcIixcImRlbm9tTmFtZVwiOlwiNjAgU2hpZnRpbmcgRmxvd2Vyc1wiLFwiZGVub21DYXRlZ29yeU5hbWVcIjpcIlNoaWZ0aW5nIEZsb3dlcnNcIixcInRhZ3NcIjpbXSxcImNvdW50cnkyTmFtZVwiOlwiSURcIixcImx2dElkXCI6MTE4NDAsXCJkZWZhdWx0UHJpY2VcIjoxNjY1MC4wLFwiZGVmYXVsdEN1cnJlbmN5XCI6XCJJRFJcIixcImFkZGl0aW9uYWxJbmZvXCI6e1wiRHluYW1pY1NrdVByb21vRGV0YWlsXCI6XCJudWxsXCJ9fSJ9.Ah9LA23iwtpoEEMORZ5giMSjgQ6MUDkAkwZifkpILjU"
  const JWT2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkeW5hbWljU2t1SW5mbyI6IntcInBjSWRcIjoyMjcsXCJwcmljZVwiOjE2NjUwLjAsXCJjdXJyZW5jeVwiOlwiSURSXCIsXCJhcGlQcmljZVwiOjE2NjUwLjAsXCJhcGlQcmljZUN1cnJlbmN5XCI6XCJJRFJcIixcImRpc2NvdW50UHJpY2VcIjoxNjY1MC4wLFwicHJpY2VCZWZvcmVUYXhcIjoxNTAwMC4wLFwidGF4QW1vdW50XCI6MTY1MC4wLFwic2t1SWRcIjpcImNvbS55b3N0YXIuYWV0aGVyZ2F6ZXIuc2hpZnRpbmdmbG93ZXIxXCIsXCJsdnRJZFwiOjExODQwfSJ9.-Hs_g0kLoX41k5xgq7j9jScMzg3I-TlMAu5qj0U0Af4"
  const body = `voucherPricePoint.id=3&voucherPricePoint.price=16650&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=547-AETHER_GAZER&lvtId=11840&shopLang=id_ID&dynamicSkuToken=${JWT1}&pricePointDynamicSkuToken=${JWT2}`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'Aether Gazer',
      id,
      name: data.confirmationFields.username
    }
  }
  else {
    return {
      success: false,
      message: "Not found"
    }
  }
} 