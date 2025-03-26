class Notification {
    send(message) {
        throw new Error("O método send() deve ser implementado.");
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log(`Enviando e-mail: ${message}`);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log(`Enviando SMS: ${message}`);
    }
}

class NotificationFactory {
    static createNotification(type) {
        if (type === "email") {
            return new EmailNotification();
        } else if (type === "sms") {
            return new SMSNotification();
        } else {
            throw new Error("Tipo de notificação inválido!");
        }
    }
}

const emailNotification = NotificationFactory.createNotification("email");
emailNotification.send("Seu pedido foi confirmado!");

const smsNotification = NotificationFactory.createNotification("sms");
smsNotification.send("Seu código de verificação é 123456.");
