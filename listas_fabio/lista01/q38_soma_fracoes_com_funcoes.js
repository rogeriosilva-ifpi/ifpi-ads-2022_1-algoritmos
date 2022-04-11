import { input } from '../../io_utils.js'
// 38. Leia 2 (duas) frações (numerador e denominador), 
// calcule e escreva a soma destas frações, escrevendo o
// resultado em forma de fração.

function main(){
    // entradas ex: 4/5
    const entrada = input('Digite duas frações (ex.: 3/6 4/9): ')
    const [numerador1, denominador1] = entrada.split('+')[0].split('/').map(Number)
    const [numerador2, denominador2] = entrada.split('+')[1].split('/').map(Number)

    // processamento
    const fracao_soma = soma_duas_fracoes(numerador1, denominador1, numerador2, denominador2)

    // saída
    console.log('Soma:', fracao_soma)
}

// Forma Tradicional
/*
function soma_duas_fracoes(n1, d1, n2, d2){
    const d = d1 * d2
    const n = ((d/d1) * n1) + ((d/d2) * n2)

    return `${n}/${d}`
}*/

// Forma Anomina
const soma_duas_fracoes = function(n1, d1, n2, d2){
    const d = d1 * d2
    const n = ((d/d1) * n1) + ((d/d2) * n2)

    return `${n}/${d}`
}

// Forma Seta(Arrow)
// const soma_duas_fracoes = (n1, d1, n2, d2) => {
//     const d = d1 * d2
//     const n = ((d/d1) * n1) + ((d/d2) * n2)

//     return `${n}/${d}`  
// }

main()