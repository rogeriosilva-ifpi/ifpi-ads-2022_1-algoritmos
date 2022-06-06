function main(){

    const matriz = [
            [[1, 2], [3, 3], [6, 7]],
            [[1, 2], [3, 3], [8]],
            [[1, 2], [3, 3], [9, 10, 11]], 
        ]

    const valor_inicial = []
    const vetor = matriz.reduce((acumulado, atual) => ([...acumulado, ...atual[2]]), valor_inicial)

    console.log(vetor)

}

main()