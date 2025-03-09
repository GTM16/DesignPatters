class TodoList {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada.`);
    }

    listarTarefas() {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }

    removerTarefa(index) {
        if (index >= 0 && index < this.tarefas.length) {
            const tarefaRemovida = this.tarefas.splice(index, 1)[0];
            console.log(`Tarefa "${tarefaRemovida}" removida.`);
        } else {
            console.log("Índice inválido.");
        }
    }
}

// Exemplo de uso
const minhaLista = new TodoList();
minhaLista.adicionarTarefa("Estudar TypeScript");
minhaLista.adicionarTarefa("Fazer exercícios de POO");
minhaLista.listarTarefas();
minhaLista.removerTarefa(0);
minhaLista.listarTarefas();
