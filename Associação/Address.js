class Adrdress {
    constructor(street,number, city,state){
        this.street = street
        this.number = number
        this.city = city
        this.state = state
    }

    fullAdrees(){
        return `Rua ${this.street}, n° ${this.number}. ${this.city}. ${this.state}`
    }
}

module.exports = Adrdress