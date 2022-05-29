import { input, print } from "../io_utils.js"

function main() {

    const rend_alcool = Number(input("digite o rendimento do veículo com álcool (em km/l): "));
    const rend_gasolina = Number(input("digite o rendimento do veículo com gasolina (em km/l): "));
    const distancia = Number(input("digite a distancia a ser percorrida (em km): "));
    const valor_alcool = Number(input("digite o valor do litro do álcool (em R$): "));
    const valor_gasolina = Number(input("digite o valor do litro da gasolina (em R$): "));

    exibe_comparativo(rend_alcool, rend_gasolina, distancia, valor_alcool, valor_gasolina);
    
}

function exibe_comparativo(rend_alcool, rend_gasolina, distancia, valor_alcool, valor_gasolina) {

    const custo_alcool = calcula_custos_alcool(rend_alcool, distancia, valor_alcool);
    const custo_gasolina = calcula_custos_gasolina(rend_gasolina, distancia, valor_gasolina);

    print(`\nos custos totais com álcool são R$ ${custo_alcool}`);
    print(`os custos totais com gasolina são R$ ${custo_gasolina}`);

    if(custo_alcool < custo_gasolina) print("vale mais a pena abastecer com álcool ;)");
    else print("vale mais a pena abastecer com gasolina ;)");

}

function calcula_custos_alcool(rend_alcool, distancia, valor_alcool) {

    const qtd_litros = distancia/rend_alcool;
    const custos_totais = qtd_litros * valor_alcool;

    return custos_totais;

}

function calcula_custos_gasolina(rend_gasolina, distancia, valor_gasolina) {

    const qtd_litros = distancia/rend_gasolina;
    const custos_totais = qtd_litros * valor_gasolina;

    return custos_totais;

}

main();