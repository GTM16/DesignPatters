class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }

    exibirArea() {
        console.log(`A área do retângulo é: ${this.calcularArea()}`);
    }
}

const retangulo = new Retangulo(10, 5);
retangulo.exibirArea();
 