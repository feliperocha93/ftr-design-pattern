const Pizza = require('./Pizza');
const PizzaBuilder = require('./PizzaBuilder');
const PizzaDirector = require('./PizzaDirector');

const builder = new PizzaBuilder();
const director = new PizzaDirector(builder);

const margherita = new Pizza('medium', 'thin', ['tomato sauce', 'mozzarella cheese', 'fresh basil'], true);

const margheritaBuilder = new PizzaBuilder()
    .setSize('medium')
    .setCrust('thin')
    .addTopping('tomato sauce')
    .addTopping('mozzarella cheese')
    .addTopping('fresh basil')
    .addCheese()
    .build();

const margheritaDirector = director.makeMargherita();

console.log({
    margherita,
    margheritaBuilder,
    margheritaDirector,
})
