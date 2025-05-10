class PizzaDirector {
    constructor(builder) {
        this.builder = builder;
    }

    makeMargherita() {
        return this.builder
            .setSize("medium")
            .setCrust("thin")
            .addCheese()
            .addTopping("tomato sauce")
            .addTopping("fresh basil")
            .build();
    }

    makePepperoni() {
        return this.builder
            .addTopping("pepperoni")
            .build();
    }
}

module.exports = PizzaDirector;
