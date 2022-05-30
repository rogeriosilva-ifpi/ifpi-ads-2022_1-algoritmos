/* 1. Faça a criptografia de uma frase digitada pelo usuário. 
Na criptografia, a frase deverá ser invertida e as
consoantes deverão ser substituídas pelo caractere #.
*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    // receber a frase
    const frase = input('Frase: ')
    console.log(frase)
    
    // inverter a frase
    const frase_invertida = inverter_frase(frase)
    console.log(frase_invertida)
    
    // substituir as consoantes
    const frase_sem_consoantes = substituir_consoantes(frase_invertida, '#')
    console.log(frase_sem_consoantes)

}

function inverter_frase(frase){
    let frase_invertida = ''

    let index = frase.length - 1

    while (index >= 0){
        frase_invertida = frase_invertida + frase[index]
        index--
    }

    return frase_invertida
}

function substituir_consoantes(frase, caracter){
    let nova_frase = ''

    let index = 0

    while (index < frase.length){
        if (eh_consoante(frase[index])){
            nova_frase += caracter
        }else{
            nova_frase += frase[index]
        }
        index++
    }

    return nova_frase
}

function eh_consoante(caracter){
    return (eh_letra(caracter) && !eh_vogal(caracter))
}

function eh_letra(caracter){
    return (eh_letra_minuscula(caracter) 
        || eh_letra_maiuscula(caracter))
}

function eh_letra_maiuscula(letra){
    const codigo = letra.charCodeAt(0)

    return (codigo >= 65) && (codigo <= 90)
}

function eh_letra_minuscula(letra){
    const codigo = letra.charCodeAt(0)

    return (codigo >= 97) && (codigo <= 122)
}

function eh_vogal(caracter){
    const vogais = 'aeiouAEIOU'
    for (let vogal of vogais){
        if (vogal === caracter){
            return true
        }
    }

    return false
}

main()