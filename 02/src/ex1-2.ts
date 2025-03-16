class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    calcularVencimento() {
        return this.salario; 
    }

    exibirDetalhes() {
        console.log(`Nome: ${this.nome} | Cargo: ${this.cargo} | Salário: R$ ${this.calcularVencimento().toFixed(2)}`);
    }
}

class FuncionarioEfetivo extends Funcionario {
    constructor(nome, salario, cargo, bonusAnual) {
        super(nome, salario, cargo);
        this.bonusAnual = bonusAnual;
    }

    calcularVencimento() {
        return this.salario + this.bonusAnual;
    }
}

class Terceirizado extends Funcionario {
    constructor(nome, salario, cargo, custoPorProjeto) {
        super(nome, salario, cargo);
        this.custoPorProjeto = custoPorProjeto;
    }

    calcularVencimento() {
        return this.salario + this.custoPorProjeto; 
    }
}

const funcionario1 = new FuncionarioEfetivo("Carlos Silva", 5000, "Desenvolvedor", 2000);
const funcionario2 = new Terceirizado("Ana Souza", 4000, "Designer", 1500);

funcionario1.exibirDetalhes(); 
funcionario2.exibirDetalhes(); 
