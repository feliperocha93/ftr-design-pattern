class Pizza {
    constructor(size, crust, toppings = [], cheese = false) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.cheese = cheese;
    }
}

module.exports = Pizza;
