class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }

    exibirDetalhes() {
        console.log(`Retângulo - Largura: ${this.largura}, Altura: ${this.altura}`);
        console.log(`Área: ${this.calcularArea()}`);
        console.log(`Perímetro: ${this.calcularPerimetro()}`);
    }
}

class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }

    exibirDetalhes() {
        console.log(`Círculo - Raio: ${this.raio}`);
        console.log(`Área: ${this.calcularArea().toFixed(2)}`);
        console.log(`Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
    }
}

const retangulo = new Retangulo(10, 5);
retangulo.exibirDetalhes();

console.log("\n");

const circulo = new Circulo(7);
circulo.exibirDetalhes();
