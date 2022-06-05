# Nickname Validator
API ini dibuat untuk mencari nickname in-game menggunakan ID player, data dari API ini diambil dari [CodaShop](https://www.codashop.com/).

Awal bermula nya poject ini saat saya mengunjungi web phising yang menggunakan sistem validasi ID pada situsnya, jadi kalo ID nya tidak valid maka data tidak bisa disubmit.

Karena dari CodaShop request dan parsing data nya lebih ribet, maka dibuatlah API ini.
## Endpoint
```sh
https://api.isan.eu.org/nickname/
```
## Output
application/json; charset=utf-8 ([RFC4627](https://datatracker.ietf.org/doc/html/rfc4627))
```json
{
  "success": boolean,
  "game": "string",
  "id": number,
  "zoneId": number,
  "server": "string",
  "name": "string",
  "message": "string"
}
```
## Daftar game
Berikut adalah daftar game yang didukung oleh API ini.
#### Genshin Impact (America, Asia, Europe, SAR)
GET `gi?id=PLAYER_ID`

**Contoh:** https://api.isan.eu.org/nickname/gi?id=600000000
## ID-REG-ONLY
Dibawah ini adalah daftar game yang hanya bisa dipakai menggunakan ID yang terdaftar dari region Indonesia
#### Mobile Legends: Bang Bang
GET `ml?id=PLAYER_ID&zone=ZONE_ID`

**Contoh:** https://api.isan.eu.org/nickname/ml?id=1114917746&zone=13486
#### Free Fire
GET `ff?id=PLAYER_ID`

**Contoh:** https://api.isan.eu.org/nickname/ff?id=225009777
#### Arena of Valor
GET `aov?id=PLAYER_OR_OPEN_ID`

**Contoh:** https://api.isan.eu.org/nickname/aov?id=124590895269021
# Copyright
© Projek ini dibawah lisensi: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
