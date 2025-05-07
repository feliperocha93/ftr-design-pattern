const Notificador = require("./Notificador");
const SMSDecorator = require("./SMSDecorator");

let notificador = new Notificador()
notificador = new SMSDecorator(notificador);

notificador.enviar("Sistema em manutenção");
