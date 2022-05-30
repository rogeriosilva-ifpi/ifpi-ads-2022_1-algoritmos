import {input} from './io_utils.js'

function main(){
    
    let pares = 0
    let impares = 0
    let negativos = 0
    let anterior = 1.9
    let numero = Number(input('numero: '))
   
    if(numero % 2 === 0){
        pares++
    }else{
        impares++
    }
    if(numero < 0){
        negativos++
    }

    while (!(numero % anterior === 0)){
        anterior = numero
        numero = Number(input('Numero: '))
        if(numero % 2 === 0){
            pares++
        }else{
            impares++
        }
        if(numero < 0){
            negativos++
        }
    }
    console.log(`${pares} numeros pares`)
    console.log(`${impares} numeros impares`)
    console.log(`${negativos} numeros negativos`)


}


main()