class Navigator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calcularRote(from, to) {
        if (!this.strategy) {
            console.error('Strategy not set');
            return;
        }
        this.strategy.calculate(from, to)
    }
}

module.exports = Navigator;
