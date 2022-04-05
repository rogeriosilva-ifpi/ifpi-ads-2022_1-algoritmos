

// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main(){

    // entrada
    const [cod1, qtd1, valor1] = lines[0].split(' ').map(Number)
    const [cod2, qtd2, valor2] = lines[1].split(' ').map(Number)

    // processamento
    const valor_pagar = qtd1*valor1 + qtd2*valor2

    // saída
    console.log(`VALOR A PAGAR: R$ ${valor_pagar.toFixed(2)}`)

}

main()