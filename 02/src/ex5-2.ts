class Publicacao {
    constructor(titulo, autor, descricao) {
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
    }

    exibirResumo() {
        return `"${this.titulo}" por ${this.autor} - ${this.descricao}`;
    }
}

class Artigo extends Publicacao {
    constructor(titulo, autor, descricao, numeroDePalavras) {
        super(titulo, autor, descricao);
        this.numeroDePalavras = numeroDePalavras;
    }

    exibirResumo() {
        return `Artigo: "${this.titulo}" por ${this.autor} - ${this.numeroDePalavras} palavras.`;
    }
}

class Video extends Publicacao {
    constructor(titulo, autor, descricao, duracao) {
        super(titulo, autor, descricao);
        this.duracao = duracao;
    }

    exibirResumo() {
        return `Vídeo: "${this.titulo}" por ${this.autor} - Duração: ${this.duracao} minutos.`;
    }
}

const artigo1 = new Artigo("Inteligência Artificial", "João Silva", "Um estudo sobre IA.", 1200);
const video1 = new Video("Aprendendo JavaScript", "Maria Souza", "Tutorial básico de JS.", 15);

console.log(artigo1.exibirResumo());
console.log(video1.exibirResumo());
