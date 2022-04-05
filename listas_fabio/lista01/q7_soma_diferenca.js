// 7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import { input, print } from '../../io_utils.js'

// Definindo
function main(){
    // entrada
    const numero1 = Number(input('Número 1: '))
    const numero2 = Number(input('Número 2: '))
    const numero3 = Number(input('Número 3: '))

    // processo
    const soma = numero1 + numero2
    const diff = numero2 - numero3

    // saida
    print('Soma de N1 com N2 = ', soma)
    print(`A Diff entre N2 e N3 = ${diff}`)

}

// invocar, chamar, executar uma funcao
main()