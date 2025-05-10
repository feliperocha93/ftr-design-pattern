const StrategyRoute = require("./strategyRoute");

class WalkRoute extends StrategyRoute {
    calculate(start, end) {
        console.log(`Calculating walking route from ${start} to ${end}`);
        // Logic for walking route
    }
}

module.exports = WalkRoute;
