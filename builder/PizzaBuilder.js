const Pizza = require("./Pizza");

class PizzaBuilder {
    constructor() {
        this.reset();
    }

    setSize(size) {
        this.size = size;
        return this;
    }

    setCrust(crust) {
        this.crust = crust;
        return this;
    }

    addTopping(topping) {
        this.toppings.push(topping);
        return this;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    build() {
        const pizza = new Pizza(this.size, this.crust, this.toppings, this.cheese);
        this.reset();
        return pizza;
    }

    reset() {
        this.size = "medium";
        this.crust = "traditional";
        this.toppings = [];
        this.cheese = false;
        return this;
    }
}

module.exports = PizzaBuilder;
