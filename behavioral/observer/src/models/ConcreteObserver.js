const Observer = require("./Observer");

class Costumer extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    update(subject) {
        console.log(`${this.name} received update`);
    }
}

module.exports = Costumer;
