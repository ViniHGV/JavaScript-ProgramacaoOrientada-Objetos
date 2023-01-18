//função construtora
function Book (title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.publishad = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
}

const author = { name: "Christopher Paolini"} 
const tags = ["fantasy", "adventure"]

const eragon = new Book("Eragon", 468, tags, author)
console.log(eragon)

const eldest = new Book("Eldest", 644, tags, author)
console.log(eldest)

