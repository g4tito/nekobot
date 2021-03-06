let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `Elige un lugar de pesca`
  let user = global.db.data.users[m.sender]
  let rod = global.db.data.users[m.sender].rod
  let fdurability = global.db.data.users[m.sender].roddurability
  let __waktur = (new Date - global.db.data.users[m.sender].lastfishing)
  let _waktur = (180000 - __waktur)
  let waktur = stime(_waktur)
  let commonfish = (rod == 1 ? Math.floor(Math.random() * (35 - 40) + 40) + 1 : '')
  let tropicalfish = (rod == 1 ? Math.floor(Math.random() * (11 - 13) + 13) + 1 : '')
  let blowfish = (rod == 1 ? Math.floor(Math.random() * (8 - 10) + 10) + 1 : '')
  let crab = (rod == 1 ? Math.floor(Math.random() * (15 - 20) + 20) + 1 : '')
  let locust = (rod == 1 ? Math.floor(Math.random() * (6 - 8) + 8) + 1 : '')
  let shrimp = (rod == 1 ? Math.floor(Math.random() * (5 - 7) + 7) + 1 : '')
  let squid = (rod == 1 ? Math.floor(Math.random() * (4 - 6) + 6) + 1 : '')
  let octopus = (rod == 1 ? Math.floor(Math.random() * (3 - 5) + 5) + 1 : '')
  let exp = (rod == 1 ? Math.floor(Math.random() * (300 - 400) + 400) + 1 : '')
  let durability = (Math.floor(Math.random() * (50 - 100) + 100) + 1)
  let ca = (rod == 0 ? 'no tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'antigua' : '' || rod == 3 ? 'corupta' : '' )
  let word = (pickRandom(['un rio ð£ââ', 'el mar âµ', 'en una playa ðï¸']))

  let mr = {
  m1: 'zona 1',
  m2: 'zona 2',
  m3: 'zona 3',
  m4: 'zona 4',
  m5: 'zona 5',
  }

  let type = (text).toLowerCase() 
  switch (type) {
  case '1':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (user.level <= 4) throw 'Minimo nivel 5 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1
        user.roddurability -= durability * 1
        user.commonfish += commonfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.blowfish += blowfish * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m1}*

*ð£ CaÃ±a:* ${ca}

*Obtienes:*
â¦ Pez comun: ${commonfish}
â¦ Pez tropical: ${tropicalfish}
â¦ Pez globo: ${blowfish}
â¦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energÃ­a vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caÃ±a de pescar, escribiendo ${usedPrefix}reparar caÃ±a`)
    } else m.reply(`TodavÃ­a no tienes una caÃ±a de pescar, compralo escribiendo ${usedPrefix}comprar caÃ±a`)
  break

  case '2':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (user.level <= 9) throw 'Minimo nivel 10 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.roddurability -= durability * 1 
        user.commonfish += commonfish * 1 
        user.tropicalfish += tropicalfish * 1 
        user.crab += crab * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m2}*

*ð£ CaÃ±a:* ${ca}

*Obtienes:*
â¦ Pez comun: ${blowfish}
â¦ Pez tropical: ${tropicalfish}
â¦ Cangrejo: ${crab}
â¦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energÃ­a vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caÃ±a de pescar, escribiendo ${usedPrefix}reparar caÃ±a`)
    } else m.reply(`TodavÃ­a no tienes una caÃ±a de pescar, compralo escribiendo ${usedPrefix}comprar caÃ±a`)
  break

  case '3':
    if (rod > 0) {
    if (user.level <= 19) throw 'Minimo nivel 20 para pescar en esta zona'
    if (user.roddurability > 99) {
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.roddurability -= durability * 1
        user.commonfish += commonfish * 1 
        user.crab += crab * 1 
        user.locust += locust * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m3}*

*ð£ CaÃ±a:* ${ca}

*Obtienes:*
â¦ Pez comun: ${blowfish}
â¦ Cangrejo: ${crab}
â¦ Langosta: ${locust}
â¦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energÃ­a vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caÃ±a de pescar, escribiendo ${usedPrefix}reparar caÃ±a`)
    } else m.reply(`TodavÃ­a no tienes una caÃ±a de pescar, compralo escribiendo ${usedPrefix}comprar caÃ±a`)
  break

  case '4':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (user.level <= 29) throw 'Minimo nivel 30 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.roddurability -= durability * 1
        user.crab += crab * 1 
        user.locust += locust * 1 
        user.shrimp += shrimp * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m4}*

*ð£ CaÃ±a:* ${ca}

*Obtienes:*
â¦ Cangrejo: ${crab}
â¦ Langosta: ${locust}
â¦ Camaron: ${shrimp}
â¦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energÃ­a vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caÃ±a de pescar, escribiendo ${usedPrefix}reparar caÃ±a`)
    } else m.reply(`TodavÃ­a no tienes una caÃ±a de pescar, compralo escribiendo ${usedPrefix}comprar caÃ±a`)
  break

  case '5':
    if (rod > 0) {
    if (user.roddurability > 99) {
    if (user.level <= 39) throw 'Minimo nivel 40 para pescar en esta zona'
    if (new Date - user.lastfishing > 180000) {
        user.lastfishing = new Date * 1 
        user.roddurability -= durability * 1
        user.commonfish += commonfish * 1 
        user.squid += squid * 1 
        user.octopus += octopus * 1 
        user.exp += exp * 1 
    let teks = `
*Pescaste en ${mr.m5}*

*ð£ CaÃ±a:* ${ca}

*Obtienes:*
â¦ Pez comun: ${commonfish}
â¦ Calamar: ${squid}
â¦ Pulpo: ${octopus}
â¦ Exp: ${exp}

*Durabilidad:* [ *-${durability}* ]
`.trim()
    conn.reply(m.chat, teks, m)
    } else m.reply(`Te quedaste sin energÃ­a vuelve dentro de *${waktur}*`)
    } else m.reply(`Repara tu caÃ±a de pescar, escribiendo ${usedPrefix}reparar caÃ±a`)
    } else m.reply(`TodavÃ­a no tienes una caÃ±a de pescar, compralo escribiendo ${usedPrefix}comprar caÃ±a`)
  break

  default:
  return m.reply(`La zona *${args[0]}* no esta en el mapa!`)
  }
}

handler.help = ['pescar']
handler.tags = ['rpg']
handler.command = /^(pescar|fishing)$/i

export default handler


function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
