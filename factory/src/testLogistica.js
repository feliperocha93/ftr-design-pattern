const LogisticaMarinha = require('./logistica/LogisticaMarinha');
const LogisticaTerrestre = require('./logistica/LogisticaTerrestre');

const tipo = 'marinha'; // ou 'terrestre'
let transporte;

if (tipo === 'marinha') {
    transporte = new LogisticaMarinha();
}
else if (tipo === 'terrestre') {
    transporte = new LogisticaTerrestre();
}


transporte.entregarCarga()
