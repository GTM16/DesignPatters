class MetodoPagamento {
    pagar(valor) {
        throw new Error('Método "pagar" deve ser implementado.');
    }
}

class CartaoCredito extends MetodoPagamento {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} realizado com cartão de crédito.`);
    }
}

class PayPal extends MetodoPagamento {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} realizado via PayPal.`);
    }
}

class Boleto extends MetodoPagamento {
    pagar(valor) {
        console.log(`Pagamento de R$${valor} realizado com boleto.`);
    }
}

// Classe Compra
class Compra {
    constructor(valor) {
        this.valor = valor;
    }

    realizarPagamento(metodo) {
        console.log(`Processando pagamento de R$${this.valor}...`);
        metodo.pagar(this.valor);
    }
}

const compra = new Compra(150.00);

const cartao = new CartaoCredito();
const paypal = new PayPal();
const boleto = new Boleto();

console.log("\n--- Pagamento com Cartão de Crédito ---");
compra.realizarPagamento(cartao);

console.log("\n--- Pagamento com PayPal ---");
compra.realizarPagamento(paypal);

console.log("\n--- Pagamento com Boleto ---");
compra.realizarPagamento(boleto);
