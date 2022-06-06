export function novo_vetor(tamanho){
    return new Array(tamanho)
}

function show_valores_vetor(vetor){
    for (let i = 0; i < vetor.length; i++){
        console.log(i, ' > ', vetor[i])
    }
}

export function show_vetor(vetor){
    console.log(vetor)
}