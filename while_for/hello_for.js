function main(){
    let letra
    let animal = 'Antílope'
    console.log(animal)

    // for (let i in animal){
    //     if (eh_impar(i)){
    //         letra = animal[i]
    //         console.log(i, letra)
    //     }
    // }
    // for (let letra of animal){
    //     console.log(letra)
    // }

    for (let i = 0; i < animal.length; i = i + 1){
        console.log(i, animal[i])
    }
}

function eh_par(valor){
    return valor % 2 === 0
}

function eh_impar(valor){
    return !eh_par(valor)
}

main()