let handler = async m => m.reply(`
            .✵.GRUP RIELBotz.✵.

            https://chat.whatsapp.com/JqzZbqyCvBa6tXzLH1P3hZ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
