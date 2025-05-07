const TextoDecorator = require("./TextoDecorator");

class NegritoDecorator extends TextoDecorator {
    constructor(texto) {
        super(texto);
    }

    renderizar() {
        return `<strong>${super.renderizar()}</strong>`;
    }
}
module.exports = NegritoDecorator;
