import { input, print } from "../io_utils.js"

let numero_anterior = 0;

let qtd_pares = 0;
let qtd_impares = 0;
let qtd_positivos = 0;
let qtd_negativos = 0;

function main() {

    let numero = Number(input("Digite um número inteiro: "));
    registra_categoria(numero);
    
    while(verifica_multiplo(numero)) {

        numero = Number(input("Digite um número inteiro: "));
        registra_categoria(numero);

    }

    exibe_registros();

}

function registra_categoria(numero) {

    if(numero % 2 === 0) qtd_pares++;
    else if(numero % 2 !== 0) qtd_impares++;

    if(numero > 0) qtd_positivos++;
    else if(numero < 0) qtd_negativos++;

}

function verifica_multiplo(numero) {

    let continuar = true;

    if(numero_anterior !== 0 && numero_anterior !== 1) {

        if(numero > numero_anterior) {
            if(numero % numero_anterior === 0) continuar = false; 
        } else if(numero < numero_anterior) {
            if(numero_anterior % numero === 0) continuar = false; 
        }

    }

    numero_anterior = numero;

    return continuar

}

function exibe_registros() {

    print("\nForam digitados:");
    print(`${qtd_pares} números pares`);
    print(`${qtd_impares} números ímpares`);
    print(`${qtd_positivos} números positivos`);
    print(`${qtd_negativos} números negativos`);

}

main();