class CriarConta {
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }
}

//Herança POO
class Logar extends CriarConta { }

const Nvg = new CriarConta("Nvg@gmail.com", "1234")
const Vns = new Logar("Vns@gmail.com", "1234")

console.log(Vns)
console.log(Nvg)

