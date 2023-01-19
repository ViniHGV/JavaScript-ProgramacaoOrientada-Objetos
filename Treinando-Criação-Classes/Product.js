class Product{
    constructor(){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock = function(quantity){
        inStock += quantity
        return inStock
    }
    calculateDiscont = function(price){
        if (price > 20){
            price *0.20
            return price
        }
    }
}