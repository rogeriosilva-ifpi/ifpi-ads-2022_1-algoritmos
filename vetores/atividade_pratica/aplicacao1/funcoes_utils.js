import {input} from './io_utils.js'
import fs from 'fs'

export function mostrar_menu(){

    let menu = '\t***OPÇÕES DE VETOR****'
    menu += '\ni - Inicializar vetor numérico'
    menu += '\nii - Mostrar todos os valores'
    menu += '\niii - Rezetar vetor'
    menu += '\niv - Ver quantidade de itens no vetor'
    menu += '\nv - Ver menor e maior valor e sua posição'

    menu += '\n0 - sair'

    console.log(menu)
}
export function mostrar_submenu(){
    let menu = '\t***submenu***'
    menu += '\n1 - valores automáticos'
    menu += '\n2 - escrever valores manualmente'
    menu += '\n3 - carregar valor de arquivo externo'
    
    menu += '\n0 - sair'
    console.log(menu)
}

export function especificacoes_do_vetor(tamanho, minimo, maximo){
    
}


export function criar_vetor_automático(tamanho, minimo, maximo){
    const vetor = new Array()
    let count = 0
    while(count < tamanho){       
        vetor[count] = random(minimo, maximo)
        count++
    }
    return vetor
    //console.log(vetor)
}

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

export function criar_vetor_manual(tamanho, minimo, maximo){
    const vetor = new Array()
    let count = 0

    while(count < tamanho){
        vetor[count] = Number(input('valores> '))
        if(vetor[count] < minimo || vetor[count] > maximo){
            return 'valor fora da faixa especificada'
        }
        count++
    }   
    return vetor
        //console.log(vetor)   
}

export function loadfile_arquivo(nome_do_arquivo, tamanho){   
    const input = fs.readFileSync(`${nome_do_arquivo}.txt`, 'utf8')
    var lines = input.split('\n');

    const vetor = new Array()
    let count = 0

    while(count < tamanho){
        vetor[count] = lines[count]
        
        count++
    }
    return vetor
    //console.log(vetor)   
}

export function novo_vetor_padrao(tamanho, valor_padrao) {
    const vetor = new Array(tamanho).fill(valor_padrao)

    return vetor
}

export function maior_elemento(vetor) {
    let maior = 0
    let pos_maior = 0
    let count = 0
    while (count < vetor.length) {
        if (vetor[count] > maior) {
            maior = vetor[count]
            pos_maior = count + 1
        }
        count++
    }
    return [maior, pos_maior]
}

export function menor_elemento(vetor) {
    let menor = vetor[0]
    let pos_menor = 0
    let count = 0

    while (count < vetor.length) {
        if(vetor[count] < menor){
            menor = vetor[count]
            pos_menor = count + 1
        }
        count++
    }
    return [menor, pos_menor]
}
