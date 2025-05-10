class StrategyRoute {
    calculate(from, to) {
        throw new Error('getRoute method should be implemented in subclasses');
    }
}

module.exports = StrategyRoute;
