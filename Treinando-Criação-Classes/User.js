class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    Login = function (email,password){

        if(email == this.email && password == this.password){
            console.log("Login success !!")
        }else{
            console.log("Error login !!")
        }
    }
}

const Vns = new User("Vinicius", "Vns@gmail.com", "1234")


Vns.Login("Vns@gmail.com", "1234")
console.log(Vns)