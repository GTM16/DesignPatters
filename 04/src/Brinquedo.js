class Brinquedo {
    brincar() {
        throw new Error("O método brincar() deve ser implementado.");
    }
}


class CarrinhoPlastico extends Brinquedo {
    brincar() {
        console.log("O carrinho de plástico desliza suavemente pelo chão!");
    }
}

class BonecaPlastico extends Brinquedo {
    brincar() {
        console.log("A boneca de plástico pode ser vestida com roupas coloridas!");
    }
}

class CarrinhoMadeira extends Brinquedo {
    brincar() {
        console.log("O carrinho de madeira tem um design rústico e rodas firmes!");
    }
}

class BonecaMadeira extends Brinquedo {
    brincar() {
        console.log("A boneca de madeira tem detalhes esculpidos à mão!");
    }
}

class FabricaBrinquedos {
    criarCarrinho() {
        throw new Error("O método criarCarrinho() deve ser implementado.");
    }
    
    criarBoneca() {
        throw new Error("O método criarBoneca() deve ser implementado.");
    }
}

class FabricaPlastico extends FabricaBrinquedos {
    criarCarrinho() {
        return new CarrinhoPlastico();
    }

    criarBoneca() {
        return new BonecaPlastico();
    }
}

class FabricaMadeira extends FabricaBrinquedos {
    criarCarrinho() {
        return new CarrinhoMadeira();
    }

    criarBoneca() {
        return new BonecaMadeira();
    }
}

function testarFabrica(fabrica) {
    const carrinho = fabrica.criarCarrinho();
    const boneca = fabrica.criarBoneca();
    
    carrinho.brincar();
    boneca.brincar();
}

console.log("Testando fábrica de brinquedos de PLÁSTICO:");
const fabricaPlastico = new FabricaPlastico();
testarFabrica(fabricaPlastico);

console.log("\nTestando fábrica de brinquedos de MADEIRA:");
const fabricaMadeira = new FabricaMadeira();
testarFabrica(fabricaMadeira);
