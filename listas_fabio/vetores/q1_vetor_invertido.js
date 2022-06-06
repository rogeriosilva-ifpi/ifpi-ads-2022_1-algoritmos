/*
1. Leia um vetor A com N elementos e escreva um vetor B, 
com os mesmos elementos de A, sendo que
estes deverão estar invertidos, ou seja, 
o 1o elemento de A deve ser o último elemento de B; o 2o
elemento de A deve ser o penúltimo elemento de B e 
assim por diante.
*/

import { input } from '../../io_utils.js'

function main(){
    const qtd_elementos = Number(input('N: '))

    const vetor_a = novo_vetor(qtd_elementos)

    for (let i = 0; i < vetor_a.length; i++){
        vetor_a[i] = Number(input(`[${i+1}]: `))
    }

    show_valores_vetor(vetor_a)

    // tranferir os valores de a para b
    const vetor_b = gerar_vetor_invertido(vetor_a)

    show_valores_vetor(vetor_b)


}

function show_valores_vetor(vetor){
    for (let i = 0; i < vetor.length; i++){
        console.log(i, ' > ', vetor[i])
    }
}

function novo_vetor(tamanho){
    return new Array(tamanho)
}

function gerar_vetor_invertido(vetor){
    const vetor_invertido = novo_vetor(vetor.length)

    let j = 0
    for (let i = vetor.length - 1; i >= 0; i--){
        vetor_invertido[j] = vetor[i]
        j++
    }

    return vetor_invertido
}

main()