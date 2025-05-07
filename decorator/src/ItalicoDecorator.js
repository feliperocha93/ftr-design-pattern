const TextoDecorator = require("./TextoDecorator");

class ItalicoDecorator extends TextoDecorator {
    constructor(texto) {
        super(texto);
    }

    renderizar() {
        return `<em>${super.renderizar()}</em>`;
    }
}

module.exports = ItalicoDecorator;
