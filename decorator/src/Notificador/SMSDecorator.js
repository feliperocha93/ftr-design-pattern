const Notificador = require("./Notificador")

class SMSDecorator extends Notificador {
    constructor(notificador) {
        super();
        this.notificador = notificador;
    }

    enviar(mensagem) {
        this.notificador.enviar(mensagem);
        console.log(`Mensagem enviada por SMS: ${mensagem}`);
    }
}

module.exports = SMSDecorator;
