const TextoDecorator = require("./TextoDecorator");

class SublinhadoDecorator extends TextoDecorator {
    constructor(texto) {
        super(texto);
    }

    renderizar() {
        return `<u>${super.renderizar()}</u>`;
    }
}

module.exports = SublinhadoDecorator;
