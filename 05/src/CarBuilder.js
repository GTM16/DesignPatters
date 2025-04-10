
class Carro {
    constructor(modelo, motor, cor, cambio, opcionais) {
        this.modelo = modelo;
        this.motor = motor;
        this.cor = cor;
        this.cambio = cambio;
        this.opcionais = opcionais;
    }

    resumo() {
        return `
Carro Configurado:
Modelo: ${this.modelo}
Motor: ${this.motor}
Cor: ${this.cor}
Câmbio: ${this.cambio}
Opcionais: ${this.opcionais.join(', ')}
        `;
    }
}

class CarBuilder {
    constructor() {
        this.opcionais = [];
    }

    setModelo(modelo) {
        this.modelo = modelo;
        return this;
    }

    setMotor(tipo) {
        if (!['gasolina', 'elétrico', 'híbrido'].includes(tipo)) {
            throw new Error('Tipo de motor inválido.');
        }
        this.motor = tipo;
        return this;
    }

    setCor(cor) {
        this.cor = cor;
        return this;
    }

    setCambio(tipo) {
        if (!['manual', 'automático'].includes(tipo)) {
            throw new Error('Tipo de câmbio inválido.');
        }
        this.cambio = tipo;
        return this;
    }

    adicionarTetoSolar() {
        this.opcionais.push('Teto Solar');
        return this;
    }

    adicionarSomPremium() {
        this.opcionais.push('Som Premium');
        return this;
    }

    adicionarBancosCouro() {
        this.opcionais.push('Bancos de Couro');
        return this;
    }

    build() {
        if (!this.modelo || !this.motor || !this.cor || !this.cambio) {
            throw new Error('Todas as informações obrigatórias devem ser preenchidas.');
        }

        if (this.opcionais.length < 2) {
            throw new Error('É necessário selecionar pelo menos 2 opcionais.');
        }

        return new Carro(this.modelo, this.motor, this.cor, this.cambio, this.opcionais);
    }
}

try {
    const carroPersonalizado = new CarBuilder()
        .setModelo("Sedan 3000")
        .setMotor("híbrido")
        .setCor("Azul Metálico")
        .setCambio("automático")
        .adicionarTetoSolar()
        .adicionarBancosCouro()
        .build();

    console.log(carroPersonalizado.resumo());
} catch (e) {
    console.error("Erro ao configurar o carro:", e.message);
}

