const StrategyRoute = require("./strategyRoute");

class BusRoute extends StrategyRoute {
    calculate(start, end) {
        console.log(`Calculating bus route from ${start} to ${end}`);
        // Logic for bus route
    }
}

module.exports = BusRoute;
