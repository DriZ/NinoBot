module.exports = class extends require('telegraf').Telegraf {
    constructor(props) {
        super(props);
        this.config = require('../config');
        this.menus = require('../menus/index');
        this.actionHandler = new (require('./ActionHandler'))(this);
        this.hearsHandler = new (require('./HearsHandler'))(this);

        this.actionHandler.loadAll();
        this.hearsHandler.loadAll();
    }

    async run() {
        await this.telegram.setMyCommands([
            {
                command: 'start',
                description: 'Запустить бота'
            }
        ]);
        return super.launch();
    }
}