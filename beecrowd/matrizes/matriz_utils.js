import { criar_vetor } from "./vetor_utils.js"

export function criar_matriz_quadrada(ordem){
    return criar_matriz(ordem, ordem)
}

export function criar_matriz(qtd_linhas, qtd_colunas){
    const matriz = criar_vetor(qtd_linhas)

    for (let i = 0; i < matriz.length; i++){
        matriz[i] = criar_vetor(qtd_colunas)
    }

    return matriz
}

export function show_matriz(matriz){
    
    for (let i = 0; i < matriz.length; i++){
        let linha = ''
        for (let j = 0; j < matriz[i].length; j++){
            linha += matriz[i][j]
        }
        console.log(linha)
    }
}