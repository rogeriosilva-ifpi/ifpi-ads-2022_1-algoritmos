export function novo_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

/** 
 * @param operacao: 
 * é uma funcao que recebe um parametro 
 * */
export function map_vetor(vetor, operacao){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = operacao(vetor[i])
    }

    return vetor
}