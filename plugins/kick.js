import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, participants }) => {
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
  if (user.startsWith(owr)) return await m.reply('No puedo eliminarlo\'a por que el creó el grupo')
  conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  m.reply(`Se eliminó a *@${user.split('@')[0]}*`, null, { mentions: [user] })
}

handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|ban|echar|hechar)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
