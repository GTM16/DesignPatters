
class Payment {
    processPayment(amount) {
        throw new Error("Método processPayment() deve ser implementado.");
    }
}

class CreditCardPayment extends Payment {
    processPayment(amount) {
        console.log(`Pagamento de R$${amount.toFixed(2)} realizado com cartão de crédito.`);
    }
}

class PayPalPayment extends Payment {
    processPayment(amount) {
        console.log(`Pagamento de R$${amount.toFixed(2)} realizado via PayPal.`);
    }
}

class BoletoPayment extends Payment {
    processPayment(amount) {
        console.log(`Boleto gerado para pagamento de R$${amount.toFixed(2)}.`);
    }
}

class PaymentFactory {
    static createPayment(method) {
        switch (method.toLowerCase()) {
            case "cartao":
                return new CreditCardPayment();
            case "paypal":
                return new PayPalPayment();
            case "boleto":
                return new BoletoPayment();
            default:
                throw new Error("Método de pagamento não suportado.");
        }
    }
}

const metodo1 = PaymentFactory.createPayment("cartao");
metodo1.processPayment(150.75);

const metodo2 = PaymentFactory.createPayment("paypal");
metodo2.processPayment(99.90);

const metodo3 = PaymentFactory.createPayment("boleto");
metodo3.processPayment(200.00);
