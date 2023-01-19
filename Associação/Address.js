class Address {
    constructor(street,number, city,state){
        this.street = street
        this.number = number
        this.city = city
        this.state = state
    }

    fullAddrees(){
        return `Rua ${this.street}, n° ${this.number}. ${this.city}. ${this.state}`
    }
}

module.exports = Address