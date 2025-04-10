
class BurgerOrder {
    constructor(pao, proteina, ingredientes, bebida) {
        this.pao = pao;
        this.proteina = proteina;
        this.ingredientes = ingredientes;
        this.bebida = bebida;
    }

    exibirPedido() {
        console.log(" Pedido Final:");
        console.log(`- Pão: ${this.pao}`);
        console.log(`- Proteína: ${this.proteina}`);
        console.log(`- Ingredientes: ${this.ingredientes.join(', ') || 'Nenhum'}`);
        console.log(`- Bebida: ${this.bebida || 'Sem bebida'}`);
    }
}

class BurgerOrderBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.pao = null;
        this.proteina = null;
        this.ingredientes = [];
        this.bebida = null;
        return this;
    }

    setPao(pao) {
        this.pao = pao;
        return this;
    }

    setProteina(proteina) {
        this.proteina = proteina;
        return this;
    }

    adicionarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
        return this;
    }

    setBebida(bebida) {
        this.bebida = bebida;
        return this;
    }

    build() {
        if (!this.pao || !this.proteina) {
            throw new Error("O pedido precisa ter um tipo de pão e uma proteína.");
        }
        const pedido = new BurgerOrder(
            this.pao,
            this.proteina,
            this.ingredientes,
            this.bebida
        );
        this.reset();
        return pedido;
    }
}


const builder = new BurgerOrderBuilder();

const pedido1 = builder
    .setPao("Brioche")
    .setProteina("Carne")
    .adicionarIngrediente("Queijo")
    .adicionarIngrediente("Alface")
    .adicionarIngrediente("Tomate")
    .setBebida("Refrigerante")
    .build();

pedido1.exibirPedido();

const pedido2 = builder
    .setPao("Integral")
    .setProteina("Vegetariano")
    .adicionarIngrediente("Cebola")
    .setBebida(null)
    .build();

pedido2.exibirPedido();
