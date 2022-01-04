let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Three [0895323241456]
│ • Gopay [0895323241456]
│ • Telkomsel [081379753850]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895323241456
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
