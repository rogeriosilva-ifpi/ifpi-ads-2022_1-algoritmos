import { input } from '../../io_utils.js'
// 38. Leia 2 (duas) frações (numerador e denominador), 
// calcule e escreva a soma destas frações, escrevendo o
// resultado em forma de fração.

function main(){
    // entradas ex: 4/5
    const entrada = input('Fração (ex.: 3/6): ')
    const valores = entrada.split('/')
    const numerador1 = Number(valores[0])
    const denominador1 = Number(valores[1])

    console.log(`Numerador: ${numerador1}`)
    console.log(`Denominador: ${denominador1}`)
}

main()