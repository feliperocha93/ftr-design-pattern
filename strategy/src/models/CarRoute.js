const StrategyRoute = require("./strategyRoute");

class CarRoute extends StrategyRoute {
    calculate(start, end) {
        console.log(`Calculating car route from ${start} to ${end}`);
        // Logic for car route
    }
}

module.exports = CarRoute;
