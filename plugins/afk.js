let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  if (text.length > 300) return m.reply('El texto es demasiɑdo largo mínimo 300 caracteres')
  user.afk = + new Date
  user.afkReason = text
  conn.reply(m.chat, `\t\t*😴 Ahora estas afk*\n\n• Usuario: ${conn.getName(m.sender)}\n• Razon: ${text ? ': ' + text : '×'}`, m, { mentions: [m.sender] })
}

handler.help = ['afk']
handler.tags = ['fun']
handler.command = /^(afk)$/i

export default handler