const TelegramBot = require('node-telegram-bot-api');
const debug = require('./helpers');
const TOKEN = '740562449:AAG0jFy9qp5M5KyVK0ew38ojU5H73RmqeEo';

const bot = new TelegramBot(TOKEN, {
	polling: {
		interval: 300,
		autoStart: true,
		params: {
			timeout: 10
		}
	}
});

bot.on('inline_query', query => {

	const results = [];

	for(let i = 0;'TITle ' + i, i < 5; i++) {
		
		results.push({
			type: 'article',
			id: i.toString(),
			title: 'Title ' + i,
			input_message_content: {
				message_text: `Article # ${i+1}`
			}
		})
	}

	bot.answerInlineQuery(query.id, results, {
		cache_time: 0
	})

})
/*

*/
// bot.onText(/\/start/, msg => {
// 	const { id } = msg.chat;


// });

// bot.onText(/\/help (.+)/, (msg, [source, match]) => {
// 	const { id } = msg.chat;
// 	const markdown = `*Hello, ${msg.from.first_name}*
// 		_italic text_
// 	`
// 	bot.sendMessage(id, markdown, { parse_mode: 'markdown' });
// });

//bot.on('message', msg => {

	// const html = `
	// 	<strong>Hello, ${msg.from.first_name}</strong>
	// 	<pre>${debug(msg)}</pre>
	// `

	// setTimeout(() => {
	// 	bot.sendMessage(msg.chat.id, `https://core.telegram.org/bots/api#markdown-style`, {
	// 		disable_web_page_preview: true,
	// 		disable_notification: true,
	// 	})
	// }, 4000)

	// bot.sendMessage(msg.chat.id, html, { parse_mode: 'HTML' })
	// const { id } = msg.chat;

	// bot.sendMessage(id, 'Inline keyboard', {
	// 	reply_markup: {
	// 		inline_keyboard: [
	// 			[
	// 				{
	// 					text: 'Google',
	// 					url: 'https://google.com'
	// 				}
	// 			],
	// 			[
	// 				{
	// 					text: 'First',
	// 					callback_data: 'reply'
	// 				}
	// 			],
	// 			[
	// 				{
	// 					text: 'Second',
	// 					callback_data: 'forward'
	// 				}
	// 			]
	// 		]
	// 	}
	// })

	// bot.on('callback_query', query => {
	// 	bot.sendMessage(query.message.chat.id, debug(query));
	// 	bot.answerCallbackQuery(query.id, `${query.data}`)
	// })

	// console.log('ji')
	// if(msg.text === 'Закрыть') {
	// 	bot.sendMessage(id, 'ZAkruvaiy', {
	// 		reply_markup: {
	// 			remove_keyboard: true
	// 		}
	// 	});
	// } else if (msg.text === 'Ответить') {
	// 	bot.sendMessage(id, 'Otvet', {
	// 		reply_markup: {
	// 			force_reply: true
	// 		}
	// 	})
	// } else {
	// 	bot.sendMessage(id, 'Keyboard', {
	// 		reply_markup: {
	// 			keyboard: [
	// 				[{
	// 					text: 'Отправить метоположение',
	// 					request_location: true
	// 				}],
	// 				['Ответить','Закрыть'],
	// 				[{
	// 					text: 'Отправить контакт',
	// 					request_contact: true
	// 				}]
	// 			]
	// 		}
	// 	});
	// }
//})