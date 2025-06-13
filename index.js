// index.js const mineflayer = require('mineflayer'); const { Vec3 } = require('vec3'); const keepAlive = require('./keep_alive');

const bot = mineflayer.createBot({ host: 'gold06.asaka.asia', port: 25006, username: 'AFK' });

bot.once('spawn', () => { console.log('Bot đã vào server.'); });

bot.on('messagestr', async (message) => { const lower = message.toLowerCase(); if (lower.includes('/register') || lower.includes('đăng ký')) { bot.chat('/register 123456789@ 123456789@'); setTimeout(() => bot.chat('/login 123456789@'), 3000); setTimeout(() => bot.chat('/lay'), 5000); } else if (lower.includes('/login') || lower.includes('đăng nhập')) { bot.chat('/login 123456789@'); setTimeout(() => bot.chat('/lay'), 5000); } else if (message.includes('ʏêᴜ ᴄầᴜ ᴅịᴄʜ ᴄʜᴜʏểɴ đếɴ') || message.includes('ʜọ.')) { bot.chat('/tpaccept'); setTimeout(() => bot.chat('/lay'), 5000); } });

setInterval(() => { const pos = bot.entity.position; bot.setControlState('sneak', false); bot.setControlState('forward', true); setTimeout(() => { bot.setControlState('forward', false); bot.setControlState('back', true); setTimeout(() => { bot.setControlState('back', false); bot.setControlState('jump', false); bot.setControlState('sneak', false); }, 1000); }, 1000); }, 60000);

