const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const helper = require('./helper');
const keyboard = require('./keyboard');
const kb = require('./keyboard-buttons');

helper.logStart();

const bot = new TelegramBot(config.TOKEN, {
	polling: true
});

bot.on('message', msg => {
	console.log('work', msg.from.first_name)

	const chatId = helper.getChatId(msg);

	switch (msg.text) {
		case kb.home.favourite:
		break;
		case kb.home.cinemas:
		break;
		case kb.home.films:
			bot.sendMessage(chatId, `Choose genre:`, {
				reply_markup: {keyboard: keyboard.films}
			})
		break;
		case kb.back:
			bot.sendMessage(chatId, `Choose genre:`, {
				reply_markup: {keyboard: keyboard.home}
			})
		break;
	}
});

bot.onText(/\/start/, msg => {
	const text = `Hello, ${msg.from.first_name}\n Choose command to initialize bot activity`;

	bot.sendMessage(helper.getChatId(msg), text, {
		reply_markup: {
			keyboard: keyboard.home
		}
	})
})