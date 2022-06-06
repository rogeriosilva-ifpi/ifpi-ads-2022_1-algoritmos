import { input } from './io_utils.js'

function main(){

    const peso = Number (input('A massa de Joaquim é:'))
    const altura = Number (input('A altura de Joaquim é:')
    const IMC = (peso/(altura*altura))
    
    console.log('O IMC é igual a:'${IMC}.toFixed[2])

    if IMC (IMC>19.8 && < 24.9){

        console.log("Joaquim, você está na faixa normal!")
    }
    if IMC (IMC<19.8){

        console.log("Joaquim, você precisa ganhar peso!")
    }
    if IMC (IMC>24.9){

        console.log("Joaquim, você precisa perder peso!")
    }

}

main()

function calorias_diarias(){

    const calorias = Number (input('Calorias consumidas diariamente:'))

}

function peso(){

    const peso = (IMC*(altura*altura))


}