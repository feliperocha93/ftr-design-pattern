const Logistica = require('./Logistica');
const Navio = require('../transporte/Navio');

class LogisticaMarinha extends Logistica {
    criarTransporte() {
        return new Navio();
    }
}

module.exports = LogisticaMarinha;
