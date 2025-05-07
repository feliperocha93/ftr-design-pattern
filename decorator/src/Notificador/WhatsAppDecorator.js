const Notificador = require("./Notificador")

class WhatsAppDecorator extends Notificador {
    constructor(notificador) {
        super();
        this.notificador = notificador;
    }

    enviar(mensagem) {
        this.notificador.enviar(mensagem);
        console.log(`Mensagem enviada por WhatsApp: ${mensagem}`);
    }
}

module.exports = WhatsAppDecorator;
