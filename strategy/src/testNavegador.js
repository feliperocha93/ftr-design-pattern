const Navigator = require('./models/Navigator');
const CarRoute = require('./models/CarRoute');
const BusRoute = require('./models/BusRoute');
const WalkRoute = require('./models/WalkRoute');

const navigator = new Navigator();
navigator.calcularRote('São Paulo', 'Rio de Janeiro');

navigator.setStrategy(new CarRoute());
navigator.calcularRote('São Paulo', 'Rio de Janeiro');

navigator.setStrategy(new BusRoute());
navigator.calcularRote('Rudge Ramos, São Bernardo do Campo', 'Vila Madalena, São Paulo');

navigator.setStrategy(new WalkRoute());
navigator.calcularRote('Rudge Ramos, São Bernardo do Campo', 'Riacho Grande, São Bernardo do Campo');
