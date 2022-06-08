let handler  = async (m, { conn, text, usedPrefix, command }) => {
let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
if (!text) throw `uhm.. teksnya mana?\nContoh :\n\n${usedPrefix + command} Halo|Tampilkan Menu|#menu`
let [t1, t2, t3] = text.split`|`
conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
for (let id of groups) await conn.sendButton(id, `\t\t\t\t*Anuncio | grupos*\n\n${teks}`, '-', t2, t3)
m.reply('Selesai Broadcast All Group 👍')
}

handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(broadcastgroup|bcgc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)