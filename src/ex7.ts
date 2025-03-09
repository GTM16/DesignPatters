// Interface Notificacao
class Notificacao {
    enviar(mensagem) {
        throw new Error('Método "enviar" deve ser implementado.');
    }
}

// Implementação da interface Notificacao nas classes específicas

class EmailNotificacao extends Notificacao {
    enviar(mensagem) {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

class SmsNotificacao extends Notificacao {
    enviar(mensagem) {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

class PushNotificacao extends Notificacao {
    enviar(mensagem) {
        console.log(`Enviando push notification: ${mensagem}`);
    }
}

class Usuario {
    constructor(nome) {
        this.nome = nome;
    }

    receberNotificacao(notificacao, mensagem) {
        console.log(`Notificação para ${this.nome}:`);
        notificacao.enviar(mensagem);
    }
}

// Testando o sistema
const usuario = new Usuario("João");

const email = new EmailNotificacao();
const sms = new SmsNotificacao();
const push = new PushNotificacao();

usuario.receberNotificacao(email, "Você recebeu uma mensagem importante.");
usuario.receberNotificacao(sms, "Seu código de verificação é 12345.");
usuario.receberNotificacao(push, "Sua tarefa foi concluída.");
