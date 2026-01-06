# 🎮 Nickname Checker API Documentation

API untuk validasi dan mendapatkan nickname in-game dari berbagai game populer. Data diambil dari [Codashop](https://www.codashop.com/).

## 📡 Base URL

```
https://apigames.chafi.dev/nickname
```

## 📋 Response Format

Semua endpoint mengembalikan JSON dengan format:

```typescript
interface Response {
  success: boolean;      // Status keberhasilan request
  game?: string;         // Nama game
  id?: number | string;  // Player ID yang di-request
  server?: string | number; // Server/Zone (jika ada)
  name?: string;         // Nickname player
  message?: string;      // Pesan error (jika gagal)
}
```

### Success Response
```json
{
  "success": true,
  "game": "Mobile Legends: Bang Bang",
  "id": 1114917746,
  "server": 13486,
  "name": "PlayerNickname"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Not found"
}
```

## 🌍 Global Games

Game-game yang support multiple region/server global.

---

### Genshin Impact

**Endpoint:** `GET /gi?id={PLAYER_ID}`

**Region Support:**
- `6` = America (os_usa)
- `7` = Europe (os_euro)
- `8` = Asia (os_asia)
- `9` = SAR (Taiwan, Hong Kong, Macao)

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/gi?id=800000000"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Genshin Impact",
  "id": 800000000,
  "server": "Asia",
  "name": "TravelerName"
}
```

---

### Honkai Impact 3rd

**Endpoint:** `GET /hi?id={PLAYER_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/hi?id=10000001"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Honkai Impact 3rd",
  "id": 10000001,
  "name": "CaptainName"
}
```

---

### Honkai: Star Rail

**Endpoint:** `GET /hsr?id={PLAYER_ID}`

**Region Support:**
- `6` = America (prod_official_usa)
- `7` = Europe (prod_official_eur)
- `8` = Asia (prod_official_asia)
- `9` = SAR (Taiwan, Hong Kong, Macao)

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/hsr?id=800000001"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Honkai: Star Rail",
  "id": 800000001,
  "server": "Asia",
  "name": "TrailblazerName"
}
```

---

### Zenless Zone Zero

**Endpoint:** `GET /zzz?id={PLAYER_ID}`

**Region Support:**
- `10` = America (prod_gf_us)
- `13` = Asia (prod_gf_jp)
- `15` = Europe (prod_gf_eu)
- `17` = SAR (prod_gf_sg)

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/zzz?id=1300000001"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Zenless Zone Zero",
  "id": 1300000001,
  "server": "Asia",
  "name": "ProxyName"
}
```

---

### LifeAfter

**Endpoint:** `GET /la?id={PLAYER_ID}&server={SERVER_NAME}`

**Available Servers (Case-insensitive):**
- MiskaTown, SandCastle, MouthSwamp, RedwoodTown, Obelisk
- NewLand, ChaosOutpost, IronStride, CrystalthornSea, FallForest
- MountSnow, NancyCity, CharlesTown, SnowHighlands, Santopany
- LevinCity, MileStone, ChaosCity, TwinIslands, HopeWall, LabyrinthSea

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/la?id=22512309&server=milestone"
```

**Example Response:**
```json
{
  "success": true,
  "game": "LifeAfter",
  "id": 22512309,
  "server": "MileStone",
  "name": "SurvivorName"
}
```

---

### Love and Deepspace

**Endpoint:** `GET /ld?id={HUNTER_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/ld?id=81001445172"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Love and Deepspace",
  "id": 81001445172,
  "name": "HunterName"
}
```

---

### Magic Chess: Go Go

**Endpoint:** `GET /mcgg?id={PLAYER_ID}&server={ZONE_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/mcgg?id=10100&server=1001"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Magic Chess: Go Go",
  "id": 10100,
  "zone": 1001,
  "name": "PlayerName"
}
```

---

### Point Blank

**Endpoint:** `GET /pb?id={ZEPETTO_ID}`

**Note:** ID berupa username/Zepetto ID (string)

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/pb?id=wakwaw55"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Point Blank",
  "id": "wakwaw55",
  "name": "PlayerName"
}
```

---

### Punishing: Gray Raven

**Endpoint:** `GET /pgr?id={PLAYER_ID}&server={SERVER_ID}`

**Available Servers (Case-insensitive):**
- `AP` = Asia-Pacific
- `EU` = Europe
- `NA` = North America

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/pgr?id=16746755&server=AP"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Punishing: Gray Raven",
  "id": 16746755,
  "server": "Asia-Pacific",
  "name": "CommandantName"
}
```

---

### Sausage Man

**Endpoint:** `GET /sm?id={PLAYER_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/sm?id=5sn9jf"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Sausage Man",
  "id": "5sn9jf",
  "name": "PlayerName"
}
```

---

### Super Sus

**Endpoint:** `GET /sus?id={SPACE_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/sus?id=15916600"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Super Sus",
  "id": 15916600,
  "name": "PlayerName"
}
```

---

### VALORANT

**Endpoint:** `GET /valo?id={RIOT_ID_WITH_TAG}`

**Note:** Riot ID harus URI-encoded (ganti `#` dengan `%23`)

**Example Request:**
```bash
# Region Indonesia
curl "https://apigames.chafi.dev/nickname/valo?id=yuyun%23123"

# Region Non-Indonesia
curl "https://apigames.chafi.dev/nickname/valo?id=Westbourne%23USA"
```

**Example Response:**
```json
{
  "success": true,
  "game": "VALORANT",
  "id": "yuyun#123",
  "server": "Indonesia",
  "name": "PlayerName"
}
```

---

## 🇮🇩 Indonesia/SEA Region Only

Game-game berikut **hanya support ID yang terdaftar di region Indonesia/SEA**.

---

### Arena of Valor

**Endpoint:** `GET /aov?id={PLAYER_OR_OPEN_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/aov?id=124590895269021"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Garena: AOV (Arena Of Valor)",
  "id": 124590895269021,
  "name": "PlayerName"
}
```

---

### Call of Duty Mobile

**Endpoint:** `GET /codm?id={PLAYER_OR_OPEN_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/codm?id=243402956362890880"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Call Of Duty Mobile",
  "id": 243402956362890880,
  "name": "PlayerName"
}
```

---

### Free Fire

**Endpoint:** `GET /ff?id={PLAYER_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/ff?id=225009777"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Garena Free Fire",
  "id": 225009777,
  "name": "PlayerName"
}
```

---

### Mobile Legends: Bang Bang

**Endpoint:** `GET /ml?id={PLAYER_ID}&server={ZONE_ID}`

**Example Request:**
```bash
curl "https://apigames.chafi.dev/nickname/ml?id=1114917746&server=13486"
```

**Example Response:**
```json
{
  "success": true,
  "game": "Mobile Legends: Bang Bang",
  "id": 1114917746,
  "server": 13486,
  "name": "PlayerName"
}
```

---

## ⚙️ Optional Parameters

### Decode Parameter

Tambahkan parameter `decode` untuk mengontrol encoding nickname.

**Values:**
- `true` (default) - Nickname akan di-decode dan langsung readable
- `false` - Nickname dalam format URL-encoded (perlu `decodeURIComponent()`)

**Kenapa pakai `decode=false`?**
- Lebih aman untuk transmisi data
- Menghindari error parsing karakter special
- Recommended untuk production use

**Example:**

```bash
# Default (decode=true)
curl "https://apigames.chafi.dev/nickname/ml?id=1007909047&server=13044"

# With decode=false (recommended)
curl "https://apigames.chafi.dev/nickname/ml?id=1007909047&server=13044&decode=false"
```

**Response dengan `decode=false`:**
```json
{
  "success": true,
  "game": "Mobile Legends: Bang Bang",
  "id": 1007909047,
  "server": 13044,
  "name": "Player%20Name%20%E2%9C%A8"
}
```

Untuk decode di JavaScript:
```javascript
const decodedName = decodeURIComponent(response.name);
```

---

## 🚨 Error Codes & Messages

| HTTP Status | Message | Deskripsi |
|------------|---------|-----------|
| 200 | - | Success - Nickname ditemukan |
| 400 | Bad request | Parameter tidak valid atau hilang |
| 404 | Not found | Player ID tidak ditemukan |
| 405 | Method not allowed | Method HTTP tidak diizinkan (hanya GET/HEAD) |

---

## 🔐 CORS & Headers

API ini sudah dilengkapi CORS headers untuk akses dari browser:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD
Access-Control-Expose-Headers: *
```

**Response Headers:**
- `Content-Type: application/json; charset=utf-8`
- `Cache-Control: public, max-age=30, s-maxage=43200`
- `X-Response-Time: {milliseconds}` - Response time dalam ms
- `X-Powered-By: @ihsangan/valid`

---

## 💻 Code Examples

### JavaScript/Node.js

```javascript
// Using Fetch API
async function getNickname(game, id, server = null) {
  const url = new URL(`https://apigames.chafi.dev/nickname/${game}`);
  url.searchParams.append('id', id);
  if (server) url.searchParams.append('server', server);

  const response = await fetch(url);
  const data = await response.json();

  if (data.success) {
    console.log(`${data.game}: ${data.name}`);
  } else {
    console.error(`Error: ${data.message}`);
  }
  return data;
}

// Examples
await getNickname('ff', 225009777);
await getNickname('ml', 1114917746, 13486);
await getNickname('valo', 'yuyun%23123');
```

### Python

```python
import requests

def get_nickname(game, player_id, server=None):
    url = f"https://apigames.chafi.dev/nickname/{game}"
    params = {'id': player_id}
    if server:
        params['server'] = server

    response = requests.get(url, params=params)
    data = response.json()

    if data['success']:
        print(f"{data['game']}: {data['name']}")
    else:
        print(f"Error: {data['message']}")

    return data

# Examples
get_nickname('ff', 225009777)
get_nickname('ml', 1114917746, 13486)
get_nickname('gi', 800000000)
```

### PHP

```php
<?php
function getNickname($game, $id, $server = null) {
    $url = "https://apigames.chafi.dev/nickname/{$game}?id={$id}";
    if ($server) {
        $url .= "&server={$server}";
    }

    $response = file_get_contents($url);
    $data = json_decode($response, true);

    if ($data['success']) {
        echo "{$data['game']}: {$data['name']}\n";
    } else {
        echo "Error: {$data['message']}\n";
    }

    return $data;
}

// Examples
getNickname('ff', 225009777);
getNickname('ml', 1114917746, 13486);
getNickname('codm', 243402956362890880);
?>
```

### cURL

```bash
# Simple request
curl "https://apigames.chafi.dev/nickname/ff?id=225009777"

# With server parameter
curl "https://apigames.chafi.dev/nickname/ml?id=1114917746&server=13486"

# With decode=false
curl "https://apigames.chafi.dev/nickname/ml?id=1114917746&server=13486&decode=false"

# Pretty print JSON (with jq)
curl -s "https://apigames.chafi.dev/nickname/ff?id=225009777" | jq

# Save response to file
curl "https://apigames.chafi.dev/nickname/ff?id=225009777" -o response.json
```

### PowerShell

```powershell
# Method 1: Invoke-RestMethod (Auto parse JSON)
$response = Invoke-RestMethod "https://apigames.chafi.dev/nickname/ff?id=225009777"
Write-Host "$($response.game): $($response.name)"

# Method 2: Invoke-WebRequest (More control)
$response = Invoke-WebRequest "https://apigames.chafi.dev/nickname/ml?id=1114917746&server=13486" -UseBasicParsing
$data = $response.Content | ConvertFrom-Json
Write-Host "$($data.game): $($data.name)"

# Function wrapper
function Get-GameNickname {
    param(
        [string]$Game,
        [string]$Id,
        [string]$Server = $null
    )

    $url = "https://apigames.chafi.dev/nickname/$Game?id=$Id"
    if ($Server) {
        $url += "&server=$Server"
    }

    $response = Invoke-RestMethod $url

    if ($response.success) {
        Write-Host "$($response.game): $($response.name)"
    } else {
        Write-Error "Error: $($response.message)"
    }

    return $response
}

# Examples
Get-GameNickname -Game "ff" -Id "225009777"
Get-GameNickname -Game "ml" -Id "1114917746" -Server "13486"
```

---

## 📊 Rate Limiting & Caching

- API menggunakan **Cloudflare Cache**
- Cache duration: **30 seconds** (client), **12 hours** (proxy)
- Tidak ada rate limit yang ketat, tapi harap bijak menggunakan API
- Recommended: Cache response di sisi client untuk mengurangi beban

---

## 🔍 Testing & Validation

### Valid Test IDs

Gunakan ID berikut untuk testing:

| Game | Test ID | Server |
|------|---------|--------|
| Free Fire | 225009777 | - |
| Mobile Legends | 1114917746 | 13486 |
| Genshin Impact | 800000000 | - |
| VALORANT | yuyun%23123 | - |
| Call of Duty | 243402956362890880 | - |
| Arena of Valor | 124590895269021 | - |

---

## 🛠️ Status & Monitoring

**API Status:** ✅ Operational

**Monitoring Dashboard:** [UptimeRobot](https://stats.uptimerobot.com/s9axzR77Fm)

---

## 📄 License & Credits

- **API Creator:** [@ihsangan/valid](https://github.com/ihsangan/valid)
- **License:** [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
- **Data Source:** [Codashop](https://www.codashop.com/) (Tidak terafiliasi)

---

## 🤝 Support & Contributions

**Issues & Bug Reports:**
- Fork repo: [github.com/didinroych/Nickname-checker](https://github.com/didinroych/Nickname-checker)
- Original repo: [github.com/ihsangan/valid](https://github.com/ihsangan/valid)

---

## 📝 Changelog

### Latest Updates
- ✅ Deployed on Cloudflare Workers
- ✅ Custom domain: `apigames.chafi.dev`
- ✅ Support 16 games
- ✅ Global CDN with caching
- ✅ CORS enabled for browser access

---

**Made with ❤️ for gamers by gamers**
