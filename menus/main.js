module.exports = class {
    static exec() {
        return require('telegraf').Markup.keyboard([
            ['📜 Прайс', '🎓 Обучение'],
            ['📷 Нино Студио', '⚙️ Подготовка к фотосессии']
        ]).resize();
    }
}