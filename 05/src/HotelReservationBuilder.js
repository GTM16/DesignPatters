
class HotelReservation {
    constructor(tipoQuarto, numeroNoites, cafeDaManha, vistaMar, wifiPremium, lateCheckout) {
        this.tipoQuarto = tipoQuarto;
        this.numeroNoites = numeroNoites;
        this.cafeDaManha = cafeDaManha || false;
        this.vistaMar = vistaMar || false;
        this.wifiPremium = wifiPremium || false;
        this.lateCheckout = lateCheckout || false;
    }

    resumo() {
        return `
Reserva de Hotel:
Tipo de Quarto: ${this.tipoQuarto}
Número de Noites: ${this.numeroNoites}
Café da Manhã: ${this.cafeDaManha ? 'Sim' : 'Não'}
Vista para o Mar: ${this.vistaMar ? 'Sim' : 'Não'}
Wi-Fi Premium: ${this.wifiPremium ? 'Sim' : 'Não'}
Late Checkout: ${this.lateCheckout ? 'Sim' : 'Não'}
        `;
    }
}

class HotelReservationBuilder {
    constructor() {
        this.tipoQuarto = "Standard";
        this.numeroNoites = 1;
        this.cafeDaManha = false;
        this.vistaMar = false;
        this.wifiPremium = false;
        this.lateCheckout = false;
    }

    setTipoQuarto(tipo) {
        this.tipoQuarto = tipo;
        return this;
    }

    setNumeroNoites(noites) {
        this.numeroNoites = noites;
        return this;
    }

    incluirCafeDaManha() {
        this.cafeDaManha = true;
        return this;
    }

    incluirVistaMar() {
        this.vistaMar = true;
        return this;
    }

    incluirWifiPremium() {
        this.wifiPremium = true;
        return this;
    }

    incluirLateCheckout() {
        this.lateCheckout = true;
        return this;
    }

    build() {
        return new HotelReservation(
            this.tipoQuarto,
            this.numeroNoites,
            this.cafeDaManha,
            this.vistaMar,
            this.wifiPremium,
            this.lateCheckout
        );
    }
}

const reservaLuxo = new HotelReservationBuilder()
    .setTipoQuarto("Luxo")
    .setNumeroNoites(3)
    .incluirCafeDaManha()
    .incluirVistaMar()
    .build();

console.log(reservaLuxo.resumo());

const reservaPresidencial = new HotelReservationBuilder()
    .setTipoQuarto("Presidencial")
    .setNumeroNoites(5)
    .incluirCafeDaManha()
    .incluirVistaMar()
    .incluirWifiPremium()
    .incluirLateCheckout()
    .build();

console.log(reservaPresidencial.resumo());
