import { input, print } from "../io_utils.js"

function main() {

    const renda_mensal = Number(input("digite sua renda mensal em reais: "));
    const valor_emprestimo = Number(input("digite o valor do emprestimo: "));
    const prazo = Number(input("digite o prazo desejado em meses: "));

    if(prazo < 2 || prazo > 24) {
        print("prazo inválido");
        main();
    }
    
    const [IOF, juros_a_pagar, total_a_pagar, parcela_mensal, aprovacao] = analisa_emprestimo(renda_mensal, valor_emprestimo, prazo);

    print(`\nvalor do IOF: ${IOF}`);
    print(`valor do juros a pagar: ${juros_a_pagar}`);
    print(`valor total a pagar: ${total_a_pagar}`);
    print(`valor da parcela mensal: ${parcela_mensal}`);
    print(`situacao: ${aprovacao}`);
    
}

function analisa_emprestimo(renda_mensal, valor_emprestimo, prazo) {

    const IOF = (0.38/100) * valor_emprestimo + (0.0082/100)*(prazo*30);
    const taxa = calcula_taxa(prazo);
    const juros_a_pagar = valor_emprestimo + (valor_emprestimo * taxa);
    const total_a_pagar = juros_a_pagar + (IOF + (IOF * taxa));
    const parcela_mensal = total_a_pagar / prazo;
    const aprovacao = (parcela_mensal <= 0.4 * renda_mensal) ? "APROVADO" : "REPROVADO";

    return [IOF.toFixed(2), juros_a_pagar.toFixed(2), total_a_pagar.toFixed(2), parcela_mensal.toFixed(2), aprovacao];

}

function calcula_taxa(prazo) {

    const selic = 12.75/100;

    if(prazo <= 6) return 0.5 * selic;
    if(prazo >= 7 && prazo <= 12) return 0.75 * selic;
    if(prazo >= 13 && prazo <= 18) return 1.00 * selic;
    if(prazo > 18) return 1.3 * selic;

}

main();