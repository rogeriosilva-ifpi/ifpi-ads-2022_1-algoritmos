import {
    dobrar_valores_matriz,
    nova_matriz,
    preencher_matriz_automaticamente,
    show_matriz,
    soma_itens_matriz
} from './matriz_utils.js'

function main(){
    let qtd_linhas = 4
    let qtd_colunas = 4
    
    let matriz = nova_matriz(qtd_linhas, qtd_colunas)

    matriz = preencher_matriz_automaticamente(matriz)

    show_matriz(matriz)

    const somatorio_itens = soma_itens_matriz(matriz)

    console.log(`A soma dos elementos da matriz é ${somatorio_itens}`)

    const matriz_valores_dobrados = dobrar_valores_matriz(matriz)

    console.log('Matriz com valores dobrados')
    show_matriz(matriz_valores_dobrados)

    /*
    const matriz_copiada = copiar_matriz(matriz)
    matriz = preencher_matriz(matriz)
    show_matriz(matriz_copiada)
    show_matriz(matriz)
    */

    
}

main()