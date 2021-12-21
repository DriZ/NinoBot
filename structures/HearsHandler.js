module.exports = class {
    constructor(bot) {
        this.bot = bot
    }

    loadAll() {
        for (let key of Object.keys(this.bot.config.phrases.hears)) {
            this.bot.hears(key, ctx => {
                ctx.deleteMessage()
                return ctx.replyWithHTML(this.bot.config.phrases.hears[key])
            });
        }
    }
}