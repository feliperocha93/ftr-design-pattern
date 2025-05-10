const Notificador = require("./Notificador")

class SlackDecorator extends Notificador {
    constructor(notificador) {
        super();
        this.notificador = notificador;
    }

    enviar(mensagem) {
        this.notificador.enviar(mensagem);
        console.log(`Mensagem enviada por Slack: ${mensagem}`);
    }
}

module.exports = SlackDecorator;
