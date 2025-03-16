class Conta {
    constructor(numero, saldoInicial) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado na conta ${this.numero}. Novo saldo: R$${this.saldo}.`);
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado na conta ${this.numero}. Novo saldo: R$${this.saldo}.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo() {
        console.log(`Saldo da conta ${this.numero}: R$${this.saldo}.`);
    }
}

class Banco {
    constructor() {
        this.contas = [];
    }

    criarConta(numero, saldoInicial) {
        if (this.contas.find(conta => conta.numero === numero)) {
            console.log(`Conta ${numero} já existe.`);
            return;
        }
        const novaConta = new Conta(numero, saldoInicial);
        this.contas.push(novaConta);
        console.log(`Conta ${numero} criada com saldo inicial de R$${saldoInicial}.`);
    }

    obterConta(numero) {
        return this.contas.find(conta => conta.numero === numero);
    }

    depositar(numero, valor) {
        const conta = this.obterConta(numero);
        if (conta) {
            conta.depositar(valor);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    sacar(numero, valor) {
        const conta = this.obterConta(numero);
        if (conta) {
            conta.sacar(valor);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    consultarSaldo(numero) {
        const conta = this.obterConta(numero);
        if (conta) {
            conta.consultarSaldo();
        } else {
            console.log("Conta não encontrada.");
        }
    }
}

// Exemplo de uso
const banco = new Banco();
banco.criarConta(123, 1000);
banco.depositar(123, 500);
banco.sacar(123, 200);
banco.consultarSaldo(123);
