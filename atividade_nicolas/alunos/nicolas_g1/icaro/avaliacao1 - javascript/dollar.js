import { input, print } from "../io_utils.js"

function main() {

    const cotacao = Number(input("digite a cotação atual do dolar em reais (cotacao em 06/05 era R$ 5,08): "));
    const valor_a_comprar = Number(input("digite quantos dólares você deseja comprar: "));
    print(calcula_valor_total(cotacao, valor_a_comprar));
    
}

function calcula_valor_total(cotacao, valor_a_comprar) {

    const IOF = (1.1/100) * valor_a_comprar;
    const total = (valor_a_comprar + IOF) * cotacao;

    return `o valor total a ser pago é R$ ${total}`;

}

main();