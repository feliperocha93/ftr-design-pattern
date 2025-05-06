class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        this.logs = [];
        Logger.instance = this;
    }

    log(message) {
        this.logs.push(message);
        console.log(`Mensagem: ${message}`);
    }

    print() {
        console.log(this.logs.length)
    }
}

module.exports = Logger;
