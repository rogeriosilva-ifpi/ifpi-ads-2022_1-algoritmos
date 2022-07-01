import { show_colecao } from "../vetores/matriz/matriz_utils.js"
import { numero_aleatorio } from "../vetores/matriz/utils.js"

function main(){

    const numeros = Array.from(
        {length: 5},(_, i) => numero_aleatorio(-100, 100)
    )
    show_colecao(numeros, 'Vetor Gerado!')

    numeros.sort((v1, v2) => v1 > v2 ? 1 : -1)
    show_colecao(numeros, 'Vetor Ordenado!')

    numeros.sort(() => Math.random() > 0.5 ? 1 : -1)
    show_colecao(numeros, 'Vetor Embaralhado!')

}

main()