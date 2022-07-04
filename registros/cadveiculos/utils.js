import { input } from '../../io_utils.js'


export function obter_numero_faixa(inicio, final){
    let numero = obter_numero()
    
    while (numero < inicio || numero > final){
        console.log(`Digite um valor entre ${inicio} e ${final}`)
        numero = obter_numero()
    }

    return numero
}

export function obter_numero(){
    let entrada = input('Número: ')

    while (entrada.length === 0 || !todos_sao_numeros(entrada)){
        console.log('Favor digitar um número: ')
        entrada = input('Número: ')
    }

    return Number(entrada)
}


export function todos_sao_numeros(texto){
    for (let i = 0; i < texto.length; i++){
        if (!eh_numero(texto[i])){
            return false
        }
    }

    return true
}

export function eh_numero(caractere){
    const code = caractere.charCodeAt(0)
    return  code >= 48 && code <= 57
}