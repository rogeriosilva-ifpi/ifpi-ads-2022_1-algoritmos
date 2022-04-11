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
    const denominador = denominador1 * denominador2
    const numerador = ((denominador/denominador1) * numerador1) + ((denominador/denominador2) * numerador2)

    // saída
    console.log(`Soma: ${numerador}/${denominador}`)
}

main()