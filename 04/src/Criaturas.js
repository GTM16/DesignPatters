class CriaturaMagica {
    atacar() {
        throw new Error("O método atacar() deve ser implementado.");
    }
}

class Dragao extends CriaturaMagica {
    atacar() {
        console.log("O Dragão cospe um jato de fogo devastador!");
    }
}

class Salamandra extends CriaturaMagica {
    atacar() {
        console.log("A Salamandra se move rapidamente e ataca com chamas ágeis!");
    }
}

class SerpenteMarinha extends CriaturaMagica {
    atacar() {
        console.log("A Serpente Marinha cria um tsunami para esmagar seus inimigos!");
    }
}

class Tritao extends CriaturaMagica {
    atacar() {
        console.log("O Tritão nada velozmente e golpeia com seu tridente aquático!");
    }
}

class FabricaCriaturasMagicas {
    criarCriaturaForte() {
        throw new Error("O método criarCriaturaForte() deve ser implementado.");
    }

    criarCriaturaVeloz() {
        throw new Error("O método criarCriaturaVeloz() deve ser implementado.");
    }
}

class FabricaReinoFogo extends FabricaCriaturasMagicas {
    criarCriaturaForte() {
        return new Dragao();
    }

    criarCriaturaVeloz() {
        return new Salamandra();
    }
}

class FabricaReinoAgua extends FabricaCriaturasMagicas {
    criarCriaturaForte() {
        return new SerpenteMarinha();
    }

    criarCriaturaVeloz() {
        return new Tritao();
    }
}

function testarFabrica(fabrica) {
    const criaturaForte = fabrica.criarCriaturaForte();
    const criaturaVeloz = fabrica.criarCriaturaVeloz();

    criaturaForte.atacar();
    criaturaVeloz.atacar();
}

console.log("Testando criaturas do Reino do Fogo:");
const fabricaFogo = new FabricaReinoFogo();
testarFabrica(fabricaFogo);

console.log("\nTestando criaturas do Reino da Água:");
const fabricaAgua = new FabricaReinoAgua();
testarFabrica(fabricaAgua);
