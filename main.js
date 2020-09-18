class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const user = new Usuario('lucasXiba@hotmial.com', '123');
const userAdmin = new Admin('lucas@hotmial.com', '123');

console.log(user.isAdmin());
console.log(userAdmin.isAdmin());