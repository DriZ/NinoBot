const bot = new (require('./structures/NinoBotCore'))(process.env.TOKEN);
const app = require('express')();
const moment = require('moment-timezone');
const http = require('http');
bot.config = require('./config');

app.get("/", (request, response) => {
    let ct = moment().tz("Europe/Kiev");
    let time = ct.format("DD.MM.YYYY HH:mm:ss");
    console.log(time);
    response.sendStatus(200);
});

app.listen(process.env.PORT || 5000);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.herokuapp.com/`);
}, 280000);

bot.use(require('telegraf').Telegraf.log());

bot.start(ctx => {
    ctx.reply(bot.config.phrases.actions.greeting, bot.menus.main.exec(), require('telegraf').Markup.button.url('site', 'https://google.com/'))
});

bot.hears('📜 Прайс', ctx => {
    ctx.deleteMessage();
    return ctx.reply('Выбери свой город:', bot.menus.selectCity.exec());
});

bot.hears('🎓 Обучение', ctx => {
    ctx.deleteMessage();
    return ctx.reply('Выбери свой курс:', bot.menus.selectCourse.exec());
});

bot.action('close', ctx => ctx.deleteMessage());

bot.run().then(x => console.log(`${bot.botInfo.username} is started!`));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));