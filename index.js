const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'gold06.asaka.asia',
  port: 25006,
  username: 'TenBotAFK',
});

bot.on('spawn', () => {
  console.log('Bot đã vào server!');
});
