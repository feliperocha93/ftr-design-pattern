const Transport = require("./Transporte");

class Ship extends Transport {
    delivery() {
        console.log("Delivering by ship");
    }
}

module.exports = Ship;
