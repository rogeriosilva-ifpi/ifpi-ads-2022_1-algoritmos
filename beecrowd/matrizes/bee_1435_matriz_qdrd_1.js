import { input } from '../../io_utils.js'
import { criar_matriz_quadrada, show_matriz } from './matriz_utils.js'

function main(){
    let ordem = Number(input('Ordem: '))

    while (ordem !== 0){
        let matriz = criar_matriz_quadrada(ordem)

        matriz = preencher_matriz(matriz)

        show_matriz(matriz)

        ordem = Number(input('Ordem: '))
    }

}

function preencher_matriz(matriz){
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            let menor_distancia = obter_menor_distancia_extremidade(matriz.length, i, j) + 1
            let item = padding_left(menor_distancia, 3)
            if (j === 0){
                matriz[i][j] = item
            }else{
                matriz[i][j] = ' ' + item
            }
            
        }
    }

    return matriz
}

function obter_menor_distancia_extremidade(tamanho, linha, coluna){
    const esquerda = coluna
    const direita = tamanho - coluna - 1
    const superior = linha
    const inferior = tamanho - linha - 1

    return calcular_menor([esquerda, direita, superior, inferior])
}

function calcular_menor(valores){
    let menor = valores[0]

    for (let i = 1; i < valores.length; i++){
        if (valores[i] < menor){
            menor = valores[i]
        }
    }

    return menor
}

function padding_left(valor, tamanho){
    const texto = String(valor)
    const qtd_espacos = tamanho - texto.length
    let padding = ''

    for (let i = 0; i < qtd_espacos; i++){
        padding += ' '
    }

    return padding + texto
}

main()