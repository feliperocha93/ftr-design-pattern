const Texto = require("./Texto");
const NegritoDecorator = require("./NegritoDecorator");
const SublinhadoDecorator = require("./SublinhadoDecorator");
const ItalicoDecorator = require("./ItalicoDecorator");

let texto = new Texto("Texto simples");
texto = new NegritoDecorator(texto);
console.log(texto.renderizar()); // Saída: <strong>Texto simples</strong>


texto = new SublinhadoDecorator(texto);
texto = new ItalicoDecorator(texto);

console.log(texto.renderizar()); // Saída: Texto simples
