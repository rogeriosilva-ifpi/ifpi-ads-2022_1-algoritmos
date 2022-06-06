/*
2. Leia um vetor A com N elementos, verifique e escreva se existem 
ou não elementos iguais no vetor. 
*/

import { input } from '../../io_utils.js'
import { novo_vetor, show_vetor } from './vetor_utils.js'

function main(){
    const qtd_itens = Number(input('Qtd itens: '))

    const vetor = novo_vetor(qtd_itens)

    for (let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input(`${i}: `))
    }

    show_vetor(vetor)

    if (ha_elementos_repetidos(vetor)){
        console.log('Há elementos repetidos!')
    }else{
        console.log('Não há elementos repetidos!')
    }

}

function ha_elementos_repetidos(vetor){

    /*let elemento
    for (let i = 0; i < vetor.length; i++){
        elemento = vetor[i]
        if (contar_ocorrencia_em_vetor(vetor, elemento) > 1){
            return true
        }
    }*/
    for (let elemento of vetor){
        
        if (contar_ocorrencia_em_vetor(vetor, elemento) > 1){
            return true
        } 
    }

    return false
}

function contar_ocorrencia_em_vetor(vetor, elemento_a_contar){
    let contador = 0
    let elemento_atual
    for (let i = 0; i < vetor.length; i++){
        elemento_atual = vetor[i]
        if (elemento_atual === elemento_a_contar){
            contador++
        }
    }

    return contador
}

main()