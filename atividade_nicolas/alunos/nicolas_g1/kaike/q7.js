import {input} from './io_utils.js'

function main(){
    //Entrada
    const cotacao = Number(input('Cotação do dolar: '))
    const dolares = Number(input('Quantos dolares deseja comprar: '))

    //Saida
    console.log(`O valor total será ${valor_total(cotacao,dolares)}`)
}

function reais(cotacao,dolares){
    return cotacao * dolares
}

function valor_total(cotacao,dolares){
    const total = reais(cotacao,dolares) + (reais(cotacao,dolares) * 0.011)
    return total
}

main()