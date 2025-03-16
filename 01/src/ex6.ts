class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    atualizarPreco(novoPreco) {
        if (novoPreco > 0) {
            this.preco = novoPreco;
            console.log(`O preço do produto "${this.nome}" foi atualizado para R$${this.preco.toFixed(2)}.`);
        } else {
            console.log("O preço deve ser um valor positivo.");
        }
    }

    adicionarEstoque(quantidade) {
        if (quantidade > 0) {
            this.quantidadeEmEstoque += quantidade;
            console.log(`Foram adicionadas ${quantidade} unidades ao estoque do produto "${this.nome}".`);
        } else {
            console.log("A quantidade deve ser positiva.");
        }
    }

    removerEstoque(quantidade) {
        if (quantidade > 0 && quantidade <= this.quantidadeEmEstoque) {
            this.quantidadeEmEstoque -= quantidade;
            console.log(`Foram removidas ${quantidade} unidades do produto "${this.nome}".`);
        } else {
            console.log("Quantidade inválida para remoção.");
        }
    }

    exibirDetalhes() {
        console.log(`Produto: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Estoque: ${this.quantidadeEmEstoque}`);
    }
}

class CadastroProdutos {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log(`Produto "${produto.nome}" cadastrado com sucesso!`);
    }

    atualizarPreco(nome, novoPreco) {
        const produto = this.produtos.find(p => p.nome === nome);
        if (produto) {
            produto.atualizarPreco(novoPreco);
        } else {
            console.log(`Produto "${nome}" não encontrado.`);
        }
    }

    exibirRelatorio() {
        console.log("\n📋 Relatório de Produtos:");
        this.produtos.forEach(produto => produto.exibirDetalhes());
    }
}

const cadastro = new CadastroProdutos();

const produto1 = new Produto("Celular", 1500, 10);
const produto2 = new Produto("Notebook", 3500, 5);
const produto3 = new Produto("Fone de Ouvido", 200, 20);

cadastro.adicionarProduto(produto1);
cadastro.adicionarProduto(produto2);
cadastro.adicionarProduto(produto3);

cadastro.atualizarPreco("Notebook", 3700);
produto1.adicionarEstoque(5);
produto2.removerEstoque(2);

cadastro.exibirRelatorio();
