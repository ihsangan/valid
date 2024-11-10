import { endpoint, headers, Result } from '../utils'

export default async function la(id: number, zone: string): Promise<Result> {
  const zoneLC = zone.toLowerCase()
  let sn = ''
  let sv = 0
  switch (true) {
    case zoneLC.includes('miskatown'):
      sn = 'MiskaTown'
      sv = 500001
      break
    case zoneLC.includes('sandcastle'):
      sn = 'SandCastle'
      sv = 500002
      break
    case zoneLC.includes('mouthswamp'):
      sn = 'MouthSwamp'
      sv = 500003
      break
    case zoneLC.includes('redwoodtown'):
      sn = 'RedwoodTown'
      sv = 500004
      break
    case zoneLC.includes('obelisk'):
      sn = 'Obelisk'
      sv = 500005
      break
    case zoneLC.includes('newland'):
      sn = 'NewLand'
      sv = 500006
      break
    case zoneLC.includes('chaosoutpost'):
      sn = 'ChaosOutpost'
      sv = 500007
      break
    case zoneLC.includes('ironstride'):
      sn = 'IronStride'
      sv = 500008
      break
    case zoneLC.includes('crystalthornsea'):
      sn = 'CrystalthornSea'
      sv = 500009
      break
    case zoneLC.includes('fallforest'):
      sn = 'FallForest'
      sv = 510001
      break
    case zoneLC.includes('mountsnow'):
      sn = 'MountSnow'
      sv = 510002
      break
    case zoneLC.includes('nancycity'):
      sn = 'NancyCity'
      sv = 520001
      break
    case zoneLC.includes('charlestown'):
      sn = 'CharlesTown'
      sv = 520002
      break
    case zoneLC.includes('snowhighlands'):
      sn = 'SnowHighlands'
      sv = 520003
      break
    case zoneLC.includes('santopany'):
      sn = 'Santopany'
      sv = 520004
      break
    case zoneLC.includes('levincity'):
      sn = 'LevinCity'
      sv = 520005
      break
    case zoneLC.includes('milestone'):
      sn = 'MileStone'
      sv = 520006
      break
    case zoneLC.includes('chaoscity'):
      sn = 'ChaosCity'
      sv = 520007
      break
    case zoneLC.includes('twinislands'):
      sn = 'TwinIslands'
      sv = 520008
      break
    case zoneLC.includes('hopewall'):
      sn = 'HopeWall'
      sv = 520009
      break
    case zoneLC.includes('labyrinthsea'):
      sn = 'LabyrinthSea'
      sv = 520010
      break
    default:
      return {
        success: false,
        message: 'Not found',
      }
  }
  const body = `voucherPricePoint.id=45713&voucherPricePoint.price=15000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=NETEASE_LIFEAFTER&shopLang=id_ID`
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  return {
    success: true,
    game: 'LifeAfter',
    id,
    server: sn,
    name: data.confirmationFields.username
  }
}