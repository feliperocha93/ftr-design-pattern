const Transport = require("./Transporte");

class Truck extends Transport {
    delivery() {
        console.log("Delivering by truck");
    }
}

module.exports = Truck;
