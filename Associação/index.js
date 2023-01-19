const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de setembro",99, "São Paulo", "SP")
const Vns = new Person("Vns", addr)

console.log(Vns)
console.log(Vns.Address.fullAddress())