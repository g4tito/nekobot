let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung`
  if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Etiqueta un imagen'
      await conn.updateProfilePicture(m.chat, img)
  } else throw `kirim/balas gambar dengan perintah *${usedPrefix + command}*`
}

handler.help = ['setppgc']
handler.tags = ['group']
handler.command = /^(setpp|setppgp|setppgc)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
