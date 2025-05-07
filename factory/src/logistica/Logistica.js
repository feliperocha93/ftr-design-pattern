class Logistica {
    criarTransporte() {
        throw new Error("Método criarTransporte() não implementado");
    }

    entregarCarga() {
        const transporte = this.criarTransporte();
        transporte.delivery();
    }
}

module.exports = Logistica;
