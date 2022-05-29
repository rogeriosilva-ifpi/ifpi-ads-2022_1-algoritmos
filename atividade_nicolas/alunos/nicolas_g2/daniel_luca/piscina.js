import {input} from "./io_utils.js";

function main() {
    const [largura, comprimento, profundidade] = input("Digite as dimenções da piscina em cm (largura, comprimento, profundidade): ").split(" ").map(Number);
    const capacidade_litros = capacidadePiscina(largura, comprimento, profundidade);
    const enchimento_litros = litrosRecomendados(capacidade_litros);

    console.log(`A capacidade de sua piscina é ${capacidade_litros} litros e é recomendado encher até ${enchimento_litros} litros.`);

    const valor_a_pagar = Number(input("Digite o valor a ser pago por cada 1000 litros: "));
    const valorGasto = valor_a_pagar_por_litros(valor_a_pagar, enchimento_litros);
    const gasto_mensal = valorGasto * 30;

    console.log(`O valor gasto para encher a piscina é ${valorGasto} reais, sendo gasto mensalmente ${gasto_mensal}.`)
}

function capacidadePiscina(x, y, z) {
    return (x * y * z) / 1000;
}

function litrosRecomendados(capacidade) {
    return (85 / 100) * capacidade;
}

function valor_a_pagar_por_litros(valor, litros) {
    return (litros + 1000) * valor;
}

main();