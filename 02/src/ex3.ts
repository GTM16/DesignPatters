class ContaBancaria {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
            return true;
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
            return false;
        }
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(numero, saldo, limiteChequeEspecial) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor) {
        if (valor > 0 && valor <= (this.saldo + this.limiteChequeEspecial)) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
            return true;
        } else {
            console.log("Saldo insuficiente, mesmo com cheque especial.");
            return false;
        }
    }
}
class ContaPoupanca extends ContaBancaria {
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo);
        this.taxaJuros = taxaJuros; 
    }

    aplicarJuros() {
        let juros = this.saldo * this.taxaJuros;
        this.saldo += juros;
        console.log(`Juros de R$${juros.toFixed(2)} aplicados. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
}


const conta1 = new ContaCorrente("12345", 1000, 500);
conta1.sacar(1200);  
conta1.depositar(300); 

const conta2 = new ContaPoupanca("67890", 2000, 0.02);
conta2.aplicarJuros();  
conta2.sacar(2100); 
