import {print, input} from './io_utils.js'

function main(){

    const comprimento = Number(input('Digite o comprimento:'))
    const largura = Number(input('Digite o valor da largura:'))
    const profundidade = Number(input('Digite o valor da profundidade'))

    const capacidade = comprimento * largura * profundidade

    console.log ('A capacidade da piscina é igual a:' ${capacidade})
}

main()