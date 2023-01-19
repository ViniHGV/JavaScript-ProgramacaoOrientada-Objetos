const Address = require("./Address")


class Person{
    constructor(name,street,number, city,state){
        this.name = name
        this.adrres = new Address(street,number, city,state)
    }
}
module.exports = Person