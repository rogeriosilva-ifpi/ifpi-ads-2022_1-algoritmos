import { adicionar_item_vetor, vetor_push } from "./vetor_utils.js"

function main(){

    const numeros = [8, 0, -1, 13, 15, 51, 14]
    console.log(numeros)

    const pos = 0
    const valor = 3.9
    
    const numeros2 = adicionar_item_vetor(numeros, pos, valor)
    console.log(numeros2)

    const numeros3 = vetor_push(numeros2, 8.0)
    console.log(numeros3)

}

main()