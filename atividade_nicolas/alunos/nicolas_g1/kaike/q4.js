import {input} from './io_utils.js'

function main(){
    //Entrada
    const rend_a = Number(input('Quantos km/l o carro faz usando alcool: '))
    const rend_g = Number(input('Quantos km/l o carro faz usando gasolina: '))
    const distancia = Number(input('Distancia percorrida: '))
    const preco_a = Number(input('Preço do alcool: '))
    const preco_g = Number(input('Preço da gasolina: '))

    console.log(`Se usar alcool o valor a pagar será ${valor(rend_a,distancia,preco_a)}`)
    console.log(`Se usar gasolina o valor a pagar será ${valor(rend_g,distancia,preco_g)}`)
    
}

function valor(rend,distancia,preco){
    const litros = distancia/rend
    return litros * preco
}


main()