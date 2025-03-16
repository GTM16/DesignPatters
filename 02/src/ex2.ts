class Veiculo {
    constructor(modelo, capacidade) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }

    calcularConsumo(distancia, passageiro) {
        throw new Error("O método calcularConsumo() deve ser implementado pelas subclasses.");
    }
}

class Onibus extends Veiculo {
    constructor(modelo, capacidade, consumoPorKm) {
        super(modelo, capacidade);
        this.consumoPorKm = consumoPorKm;
    }

    calcularConsumo(distancia) {
        return distancia * this.consumoPorKm;
    }
}

class Taxi extends Veiculo {
    constructor(modelo, capacidade, taxaPorPassageiro) {
        super(modelo, capacidade);
        this.taxaPorPassageiro = taxaPorPassageiro;
    }

    calcularConsumo(distancia, passageiro) {
        return distancia * passageiro * this.taxaPorPassageiro;
    }
}

const onibus = new Onibus("Mercedes-Benz", 50, 2.5); 
console.log(`Consumo do ônibus: ${onibus.calcularConsumo(100)} litros`); 

const taxi = new Taxi("Toyota Corolla", 4, 0.8); 
console.log(`Consumo do táxi: ${taxi.calcularConsumo(50, 3)} litros`); 
