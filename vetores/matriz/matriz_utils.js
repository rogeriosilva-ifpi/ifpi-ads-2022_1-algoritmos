import { numero_aleatorio } from './utils.js'
import { map_vetor, novo_vetor } from './vetor_utils.js'

export function nova_matriz(qtd_linhas, qtd_colunas){
    const matriz = novo_vetor(qtd_linhas)

    for (let i = 0; i < qtd_linhas; i++){
        matriz[i] = novo_vetor(qtd_colunas)
    }

    return matriz
}

export function nova_matriz_quadrada(ordem){
    return nova_matriz(ordem, ordem)
}

export function preencher_matriz_automaticamente(matriz, valor_padrao){

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            matriz[i][j] = valor_padrao || numero_aleatorio(100, 500)
        }
    }

    return matriz
}

export function show_matriz(matriz){
    console.table(matriz)
}


export function soma_itens_matriz(matriz){
    let somatorio = 0
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            somatorio += matriz[i][j]
        }
    }

    return somatorio
}

function dobra_valor(valor){
    return valor * 2
}

function dobra_valores_do_vetor(vetor){
    return map_vetor(vetor, dobra_valor)
}

export function dobrar_valores_matriz(matriz){
    // V1: sem uso de map
    /* 
    const matriz2 = copiar_matriz(matriz)
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            matriz2[i][j] = matriz[i][j] * 2
        }
    }
    */

    // V2: uso do nosso map_vetor com funções "ao vivo" (arrow/seta)
    /* 
    const matriz2 = map_vetor(matriz, vetor => map_vetor(vetor, valor => valor*2)) 
    */

    // V3: uso do nosso map_vetor porém com funções declaradas separadamente
    /* 
    const matriz2 = map_vetor(matriz, dobra_valores_do_vetor) 
    */

    // V4: uso do método map interno de Javascript
    const matriz2 = matriz.map(vetor => vetor.map(valor => valor * 2))

    return matriz2
}

export function copiar_matriz(matriz){
    const matriz_copia = novo_vetor(matriz.length)
    for (let i = 0; i < matriz.length; i++){
        matriz_copia[i] = novo_vetor(matriz[i].length)
        for (let j = 0; j < matriz_copia[i].length; j++){
            matriz_copia[i][j] = matriz[i][j]
        } 
    }

    return matriz_copia
}