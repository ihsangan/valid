import { endpoint } from '../utils'

export default async function la(id, zone) {
  let zoneLC = zone.toLowerCase()
  let sn = ''
  let sv = ''
  if (zoneLC.includes('miskatown')) {
    sn = 'MiskaTown'
    sv = 500001
  } else if (zoneLC.includes('sandcastle')) {
    sn = 'SandCastle'
    sv = 500002
  } else if (zoneLC.includes('mouthswamp')) {
    sn = 'MouthSwamp'
    sv = 500003
  } else if (zoneLC.includes('redwoodtown')) {
    sn = 'RedwoodTown'
    sv = 500004
  } else if (zoneLC.includes('obelisk')) {
    sn = 'Obelisk'
    sv = 500005
  } else if (zoneLC.includes('chaosoutpost')) {
    sn = 'ChaosOutpost'
    sv = 500007
  } else if (zoneLC.includes('ironstride')) {
    sn = 'IronStride'
    sv = 500008
  } else if (zoneLC.includes('fallforest')) {
    sn = 'FallForest'
    sv = 510001
  } else if (zoneLC.includes('mountsnow')) {
    sn = 'MountSnow'
    sv = 510002
  } else if (zoneLC.includes('nancycity')) {
    sn = 'NancyCity'
    sv = 520001
  } else if (zoneLC.includes('charlestown')) {
    sn = 'CharlesTown'
    sv = 520002
  } else if (zoneLC.includes('snowhighlands')) {
    sn = 'SnowHighlands'
    sv = 520003
  } else if (zoneLC.includes('santopany')) {
    sn = 'Santopany'
    sv = 520004
  } else if (zoneLC.includes('levincity')) {
    sn = 'LevinCity'
    sv = 520005
  } else if (zoneLC.includes('chaoscity')) {
    sn = 'ChaosCity'
    sv = 520007
  } else if (zoneLC.includes('twinislands')) {
    sn = 'TwinIslands'
    sv = 520008
  } else if (zoneLC.includes('hopewall')) {
    sn = 'HopeWall'
    sv = 520009
  } else if (zoneLC.includes('newland')) {
    sn = 'NewLand'
    sv = 500006
  } else if (zoneLC.includes('crystalthornsea')) {
    sn = 'CrystalthornSea'
    sv = 500009
  } else if (zoneLC.includes('milestone')) {
    sn = 'MileStone'
    sv = 520006
  } else if (zoneLC.includes('labyrinthsea')) {
    sn = 'LabyrinthSea'
    sv = 520010
  } else {
    return { success: false, message: 'Not found' }
  }
  const body = `voucherPricePoint.id=45713&voucherPricePoint.price=15000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=${sv}&voucherTypeName=NETEASE_LIFEAFTER&shopLang=id_ID` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  const data = await response.json()
  return { success: true, game: 'LifeAfter', id: Number(id), server: sn, name:data.confirmationFields.username }
}
