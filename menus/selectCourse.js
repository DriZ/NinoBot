const { Markup } = require('telegraf');


module.exports = class {
    static exec() {
        return Markup.inlineKeyboard([
            Markup.button.callback('🪄 Курс по Ретуши', 'retouch'),
            Markup.button.callback('📸 Базовый курс фотографии', 'photography'),
            Markup.button.callback('❌ Закрыть', 'close')
        ], { columns: 1 })
    }
}