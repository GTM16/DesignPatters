class Propulsao {
    descricao() {
        throw new Error("O método descricao() deve ser implementado.");
    }
}

class MotorJato extends Propulsao {
    descricao() {
        return "Motor a Jato para alta velocidade na Terra!";
    }
}

class PropulsaoPlasma extends Propulsao {
    descricao() {
        return "Propulsão a Plasma para viagens interplanetárias!";
    }
}

class Controle {
    descricao() {
        throw new Error("O método descricao() deve ser implementado.");
    }
}

class InteligenciaArtificial extends Controle {
    descricao() {
        return "Controle com Inteligência Artificial para máxima automação!";
    }
}

class ControleManual extends Controle {
    descricao() {
        return "Controle Manual para pilotos experientes!";
    }
}

class VeiculoFuturista {
    constructor(propulsao, controle) {
        this.propulsao = propulsao;
        this.controle = controle;
    }

    detalhes() {
        console.log(`Veículo com: ${this.propulsao.descricao()} e ${this.controle.descricao()}`);
    }
}

class FabricaVeiculosFuturistas {
    criarPropulsao() {
        throw new Error("O método criarPropulsao() deve ser implementado.");
    }

    criarControle() {
        throw new Error("O método criarControle() deve ser implementado.");
    }

    criarVeiculo() {
        const propulsao = this.criarPropulsao();
        const controle = this.criarControle();
        return new VeiculoFuturista(propulsao, controle);
    }
}

class FabricaVeiculosTerra extends FabricaVeiculosFuturistas {
    criarPropulsao() {
        return new MotorJato();
    }

    criarControle() {
        return new ControleManual();
    }
}

class FabricaVeiculosEspaco extends FabricaVeiculosFuturistas {
    criarPropulsao() {
        return new PropulsaoPlasma();
    }

    criarControle() {
        return new InteligenciaArtificial();
    }
}

function configurarVeiculo(tipo) {
    let fabrica;

    if (tipo === "terra") {
        fabrica = new FabricaVeiculosTerra();
    } else if (tipo === "espaco") {
        fabrica = new FabricaVeiculosEspaco();
    } else {
        throw new Error("Tipo de veículo inválido! Escolha 'terra' ou 'espaco'.");
    }

    const veiculo = fabrica.criarVeiculo();
    veiculo.detalhes();
}

console.log("Criando Veículo para Terra:");
configurarVeiculo("terra");

console.log("\nCriando Veículo para Espaço:");
configurarVeiculo("espaco");
