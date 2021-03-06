import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Ingrese el nombre del paquete de stickers que desea buscar`
  let json = await fetch(`https://api.zacros.my.id/search/sticker?query=${text}`)
  let jsons = await json.json()
  let res = jsons.result.map((v, index) => `*š ā¢ Resultado:* ${1 + index}\n*šŗ ā¢ Nombre:* ${v.title}\n*š§ ā¢ Url:* ${v.url}`).join`\n\nā¶\n\n`
  let imgstick = fs.readFileSync('./storage/image/sticker-maker.jpg')
  await conn.sendFile(m.chat, imgstick, 'Error.jpg', res, m)
}

handler.help = ['stickers2']
handler.tags = ['search']
handler.command = /^(stickers2)$/i

export default handler
