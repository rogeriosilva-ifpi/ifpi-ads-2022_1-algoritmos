import { input } from '../../io_utils.js'

function main(){
    let contador_pares = 0
    let contador_impares = 0
    let contador_positivos = 0
    let contador_negativos = 0

    let anterior = Number(input('Num 1: '))
    let atual = Number(input('Num 2: '))

    if (eh_par(anterior)){
        contador_pares = contador_pares + 1
    }else{
        contador_impares++
    }

    if (eh_par(atual)){
        contador_pares = contador_pares + 1
    }else{
        contador_impares++
    }

    if (eh_positivo(anterior)){
        contador_positivos++
    }else if (eh_negativo(anterior)){
        contador_negativos++
    }
    
    if (eh_positivo(atual)){
        contador_positivos++
    }else if (eh_negativo(atual)){
        contador_negativos++
    } 

    while(!for_multiplo_entre_si(anterior, atual)){
        anterior = atual
        atual = Number(input('Mais um num: '))

        if (eh_par(atual)){
            contador_pares++
        }else{
            contador_impares++
        }

        if (eh_positivo(atual)){
            contador_positivos++
        }else if (eh_negativo(atual)){
            contador_negativos++
        }
    }

    console.log(`Qtd Pares: ${contador_pares}`)
    console.log(`Qtd Ímpares: ${contador_impares}`)
    console.log(`Qtd Positivos: ${contador_positivos}`)
    console.log(`Qtd Negativos: ${contador_negativos}`)

}

function for_multiplo_entre_si(numero1, numero2){
    if (numero1 === 0 && numero2 === 0){
        return true
    }

    if ((numero1 % numero2 === 0) || (numero2 % numero1 === 0)){
        return true
    }else{
        return false
    }
}

function eh_par(valor){
    return valor % 2 === 0
}

function eh_positivo(valor){
    return valor > 0
}

function eh_negativo(valor){
    return valor < 0
}


main()