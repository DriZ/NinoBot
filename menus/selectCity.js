const { Markup } = require('telegraf');


module.exports = class {
    static exec() {
        return Markup.inlineKeyboard([
            Markup.button.callback('🌇 Александрия', 'alexCity'),
            Markup.button.callback('🌐 Другой', 'otherCity'),
            Markup.button.callback('❌ Закрыть', 'close')
        ], { columns: 2 })
    }
}