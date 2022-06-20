function main(){

    // let vetor = [8, 0, -1, 11, 18, 2, 5, 9, 20]

    let vetor = [ -1,  0,  2,  5, 8, 9, 11, 18, 20 ]
      

    console.log(vetor)

    let vetor_ordenado = ordenar_vetor_bubble(vetor, 'dsc')

    console.log(vetor_ordenado)
}


function ordenar_vetor_bubble(vetor, ordem = 'asc'){

    let comparador = ordem == 'asc' ? eh_maior : eh_menor
    let tamanho = vetor.length
    let houveTroca = false
    let contador = 0
    let auxiliar
    let k = 0

    for (let i = 0; i < tamanho - 1; i++){
        houveTroca = false
        for (let j = 0; j < tamanho - 1 - k; j++){
            contador += 1
            // if (vetor[j] < vetor[j + 1]){
            if (comparador(vetor[j], vetor[j + 1])){
                houveTroca = true
                auxiliar = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = auxiliar
            }
        }

        if(!houveTroca){
            break
        }
        k++
    }

    console.log(`Vetor ordenado com ${contador} iterações.`)

    return vetor
}


function eh_maior(valor1, valor2){
    return valor1 > valor2;
}


const eh_menor = (valor1, valor2) => !eh_maior(valor1, valor2)


main()


