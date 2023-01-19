class veiculo{
    mover(){
        console.log("O Veiculo está se movendo")
    }
}

class carro extends veiculo{
    mover(){
        console.log("O Carro está se movendo")
    }
}

class bike extends veiculo{
    mover(){
        console.log("A bike está se movendo")
    }
}

const Carro = new carro()
const Bike = new bike()

Carro.mover()
Bike.mover()