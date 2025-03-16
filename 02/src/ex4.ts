class Item {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido {
    constructor(numero) {
        this.numero = numero;
        this.itens = []; 
    }

    adicionarItem(item) {
        if (item instanceof Item) {
            this.itens.push(item);
            console.log(`Item "${item.nome}" adicionado por R$${item.preco.toFixed(2)}`);
        } else {
            console.log("Item inválido.");
        }
    }

    calcularTotal() {
        const total = this.itens.reduce((soma, item) => soma + item.preco, 0);
        console.log(`Total do pedido ${this.numero}: R$${total.toFixed(2)}`);
        return total;
    }
}

class PedidoDelivery extends Pedido {
    constructor(numero, taxaEntrega) {
        super(numero);
        this.taxaEntrega = taxaEntrega;
    }

    calcularTotal() {
        const totalItens = super.calcularTotal();
        const totalFinal = totalItens + this.taxaEntrega;
        console.log(`Total com taxa de entrega (${this.taxaEntrega.toFixed(2)}): R$${totalFinal.toFixed(2)}`);
        return totalFinal;
    }
}

const pedido1 = new Pedido("001");
pedido1.adicionarItem(new Item("Hamburguer", 20.00));
pedido1.adicionarItem(new Item("Refrigerante", 5.00));
pedido1.calcularTotal();

console.log("------------------");

const pedido2 = new PedidoDelivery("002", 8.00);
pedido2.adicionarItem(new Item("Pizza", 40.00));
pedido2.adicionarItem(new Item("Suco", 7.00));
pedido2.calcularTotal();
