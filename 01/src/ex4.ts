class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
        this.concluida = false;
    }

    marcarConcluida() {
        this.concluida = true;
        console.log(`Tarefa "${this.descricao}" marcada como concluída.`);
    }

    exibirDetalhes() {
        console.log(`Tarefa: ${this.descricao} | Status: ${this.concluida ? "Concluída" : "Pendente"}`);
    }
}

class GerenciadorTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao) {
        const novaTarefa = new Tarefa(descricao);
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa "${descricao}" adicionada.`);
    }

    marcarConcluida(indice) {
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas[indice].marcarConcluida();
        } else {
            console.log("Índice inválido. Tarefa não encontrada.");
        }
    }

    exibirTarefas() {
        console.log("\nLista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.descricao} | Status: ${tarefa.concluida ? "Concluída" : "Pendente"}`);
        });
    }
}

const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa("Estudar JavaScript");
gerenciador.adicionarTarefa("Fazer exercícios de POO");
gerenciador.adicionarTarefa("Ler um capítulo de um livro");

gerenciador.exibirTarefas();

gerenciador.marcarConcluida(1); 

gerenciador.exibirTarefas();
