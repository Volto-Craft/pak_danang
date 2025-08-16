const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: "luminousfall-XROk.aternos.me", 
    port: 55699, 
    username: "Pak Danang" 
  })

  bot.on('login', () => {
    console.log("✅ Bot sudah login ke server Aternos!")
  })

  
  setInterval(() => {
    if (bot.entity && bot.entity.position) {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }
  }, 10000)

  bot.on('end', () => {
    console.log("❌ Bot keluar, mencoba reconnect...")
    setTimeout(createBot, 5000)
  })

  bot.on('error', err => console.log("⚠️ Error:", err))
}

createBot()
