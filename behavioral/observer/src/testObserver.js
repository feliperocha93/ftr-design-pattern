const Store = require('./models/ConcreteSubject');
const Costumer = require('./models/ConcreteObserver');

const store = new Store();
const costumer1 = new Costumer("Amanda Nunes");
const costumer2 = new Costumer("Charles Oliveira");
const costumer3 = new Costumer("José Aldo");
const costumer4 = new Costumer("Alexandre Pantoja");

store.addObserver(costumer1);
store.addObserver(costumer2);
store.newProduct();

store.addObserver(costumer3);
store.addObserver(costumer4);
store.newProduct();

store.removeObserver(costumer1);
store.removeObserver(costumer2);
store.newProduct();
