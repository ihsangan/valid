import { hitCoda, Result } from '../utils'

export default async function lad(id: number): Promise<Result> {
  const JWT1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkeW5hbWljU2t1SW5mbyI6IntcInNrdUlkXCI6XCIxXzEwMDBcIixcImV2ZW50UGFja2FnZVwiOlwiMFwiLFwiZGVub21JbWFnZVVybFwiOlwiaHR0cHM6Ly9jZG4xLmNvZGFzaG9wLmNvbS9pbWFnZXMvOTE2XzQ0Y2MyNmU3LWU3NDctNDk4NS04MzQ1LWZmODFjMGUwM2QxN19MT1ZFIEFORCBERUVQU1BBQ0VfaW1hZ2UvNjAgQ3J5c3RhbHMucG5nXCIsXCJkZW5vbU5hbWVcIjpcIjYwIENyeXN0YWxzXCIsXCJkZW5vbUNhdGVnb3J5TmFtZVwiOlwiQ3J5c3RhbFwiLFwidGFnc1wiOltdLFwiY291bnRyeTJOYW1lXCI6XCJJRFwiLFwibHZ0SWRcIjoxMTY4NCxcImRlZmF1bHRQcmljZVwiOjE5MDAwLjAsXCJkZWZhdWx0Q3VycmVuY3lcIjpcIklEUlwiLFwiYWRkaXRpb25hbEluZm9cIjp7XCJEeW5hbWljU2t1UHJvbW9EZXRhaWxcIjpcIm51bGxcIixcIkxveWFsdHlDdXJyZW5jeURldGFpbFwiOlwie1xcXCJwcmljaW5nU2NoZW1lXFxcIjpcXFwicGFpZF9jdXJyZW5jeVxcXCIsXFxcImxveWFsdHlFYXJuZWRBbW91bnRcXFwiOjAuMCxcXFwibG95YWx0eUJ1cm5lZEFtb3VudFxcXCI6MC4wfVwifX0ifQ.VsI9fduPyRDA1t_GOQ65cR88HJc_a93ROdy8Fsg8bEw'
  const JWT2 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkeW5hbWljU2t1SW5mbyI6IntcInBjSWRcIjoyMjcsXCJwcmljZVwiOjE5MDAwLjAsXCJjdXJyZW5jeVwiOlwiSURSXCIsXCJhcGlQcmljZVwiOjE5MDAwLjAsXCJhcGlQcmljZUN1cnJlbmN5XCI6XCJJRFJcIixcImRpc2NvdW50UHJpY2VcIjoxOTAwMC4wLFwicHJpY2VCZWZvcmVUYXhcIjoxNzExNy4wLFwidGF4QW1vdW50XCI6MTg4My4wLFwic2t1SWRcIjpcIjFfMTAwMFwiLFwibHZ0SWRcIjoxMTY4NH0ifQ.nAclaCSG5o2xD9ccUuWTn3g8nC8Z7_nIDtj_qbCyQ0M'
  const body = `voucherPricePoint.id=3&voucherPricePoint.price=19000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=INFOLD_GAMES-LOVE_AND_DEEPSPACE&lvtId=11684&shopLang=id_ID&dynamicSkuToken=${JWT1}&pricePointDynamicSkuToken=${JWT2}`
  const data = await hitCoda(body)
  if (data.confirmationFields.username) {
    return {
      success: true,
      game: 'Love and Deepspace',
      id,
      name: data.confirmationFields.username
    }
  }
  else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}