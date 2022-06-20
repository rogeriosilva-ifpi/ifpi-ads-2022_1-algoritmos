import { novo_vetor, vetor_push } from "./vetor_utils.js"

function main(){

    const numeros = [8, 0, -1, 13, 15, 51, 14, -17]
    console.log(numeros)

    // MAP
    console.log('MAP')
    // const numeros_dobrados = map_dobra_valores(numeros)
    const metade = (valor) => {return valor / 2}
    // const numeros_dobrados = vetor_map(numeros, dobrar)
    // const numeros_dobrados = vetor_map(numeros, metade)
    // const numeros_dobrados = vetor_map(numeros, item => 'R$ ' + item)
    const numeros_dobrados = numeros.map(v => v / 3)
    console.log(numeros_dobrados)

    const result = vetor_map(vetor_map(numeros, v => v < 0 ? v*-1 : v), v => v * 2)
    console.log(result)
    

    // FILTER
    console.log('FILTER')
    // const numeros_negativos = filter_numeros_negativos(numeros)
    // console.log(numeros_negativos)
    const numeros_maiores_que_30 = vetor_filter(vetor_map(numeros, v => v * 3), (valor)=>{return valor > 30})
    console.log(numeros_maiores_que_30)

    // REDUCE
    const media_valores = reduce_media_valores(numeros)
    console.log('Media', media_valores.toFixed(2))

}

function vetor_filter(vetor, funcao){
    let vetor2 = novo_vetor(0)

    for (let i = 0; i < vetor.length; i++){
        if (funcao(vetor[i])){
            vetor2 = vetor_push(vetor2, vetor[i])
        }
    }

    return vetor2
}

function vetor_map(vetor, funcao){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = funcao(vetor[i])
    }

    return vetor
}

function dobrar(valor){
    return valor * 2
}


function map_dobra_valores(vetor){
    const vetor2 = novo_vetor(vetor.length)
    
    for (let i = 0; i < vetor.length; i++){
        vetor2[i] = vetor[i] * 2
    }

    return vetor2
}

function map_metade_valores(vetor){
    const vetor2 = novo_vetor(vetor.length)
    
    for (let i = 0; i < vetor.length; i++){
        vetor2[i] = vetor[i] / 2
    }

    return vetor2
}

function filter_numeros_negativos(vetor){
    let vetor2 = novo_vetor(0)

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            vetor2 = vetor_push(vetor2, vetor[i])
        }
    }

    return vetor2
}

function reduce_media_valores(vetor){
    let somatorio = 0

    for (let i = 0; i < vetor.length; i++){
        somatorio += vetor[i]
    }

    const media = somatorio / vetor.length

    return media
}

main()