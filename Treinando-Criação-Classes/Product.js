class Product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock (quantity){
        this.inStock += quantity
    }

    calculateDiscont (discont){
       return this.price * ((100 - discont) / 100)
    }
}

const phone = new Product("Moto G20", "Celular da motorola Moto G20", 1200)
phone.addToStock(99)
const priceWithDiscont = phone.calculateDiscont(15)

console.log(phone)
console.log(priceWithDiscont)
