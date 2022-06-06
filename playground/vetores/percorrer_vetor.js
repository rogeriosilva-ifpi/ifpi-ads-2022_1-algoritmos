function main(){
    const carros = ['Argo', 'Gol', 'Onix']

    // Tradicional FOR (mais importante para vc)
    for (let i = 0; i < carros.length; i++){
        console.log('Posicao', i, 'Carro', carros[i])
    }

    // Tradicional WHILE
    let i = 0
    while (i < carros.length){
        console.log('Posicao', i, 'Carro', carros[i])
        i++
    }

    // Iterando nos índices (FOR..IN...)
    for (let i in carros){
        console.log('Posicao', i, 'Carro', carros[i])
    }

    // Iterando nos valores (FOR..OF...)
    for (let carro of carros){
        console.log('Carro', carro)
    }

    // Iterando índices e valores com FOR OF + entries
    for (let [i, carro] of carros.entries()){
        console.log('Posicao', i, 'Carro', carro)
    }

}

main()