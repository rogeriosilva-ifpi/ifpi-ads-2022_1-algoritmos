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

export function remove_item_vetor(vetor, posicao){

    const vetor2 = novo_vetor(vetor.length - 1)
    let j = 0

    for (let i = 0; i < vetor.length; i++){
        if (i !== posicao){
            // transpor item da posicao indice para vetor2
            vetor2[j] = vetor[i]
            j++
        }
    }

    return vetor2
}

export function adicionar_item_vetor(vetor, posicao, item){
    const vetor2 = novo_vetor(vetor.length + 1)
    let j = 0

    for (let i = 0; i < vetor2.length; i++){

        if (i === posicao){
            vetor2[i] = item 
        }else{
            vetor2[i] = vetor[j]
            j++
        }
    }

    return vetor2
}

export function vetor_push(vetor, item){
    return adicionar_item_vetor(vetor, vetor.length, item)
}

export function vetor_pop(vetor){
    const removido = vetor[vetor.length - 1]
    const vetor2 = remove_item_vetor(vetor, vetor.length - 1)

    return [vetor2, removido]
}