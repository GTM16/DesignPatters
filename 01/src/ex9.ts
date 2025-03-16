
class Relatorio {
    gerar(dados) {
        throw new Error("O método 'gerar' deve ser implementado.");
    }
}


class PdfRelatorio extends Relatorio {
    gerar(dados) {
        console.log(`Gerando relatório em PDF com os dados: ${dados.join(", ")}`);
    }
}

class ExcelRelatorio extends Relatorio {
    gerar(dados) {
        console.log(`Gerando relatório em Excel com os dados: ${dados.join(", ")}`);
    }
}

class HtmlRelatorio extends Relatorio {
    gerar(dados) {
        console.log(`Gerando relatório em HTML com os dados: ${dados.join(", ")}`);
    }
}

class Gerente {
    solicitarRelatorio(relatorio, dados) {
        relatorio.gerar(dados);
    }
}


const gerente = new Gerente();
const dados = ["Vendas: R$10.000", "Clientes: 200", "Lucro: R$2.500"];

const relatorioPdf = new PdfRelatorio();
const relatorioExcel = new ExcelRelatorio();
const relatorioHtml = new HtmlRelatorio();

console.log("Relatórios sendo gerados...\n");
gerente.solicitarRelatorio(relatorioPdf, dados);
gerente.solicitarRelatorio(relatorioExcel, dados);
gerente.solicitarRelatorio(relatorioHtml, dados);
