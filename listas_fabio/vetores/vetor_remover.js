import { remove_item_vetor, vetor_pop } from "./vetor_utils.js"

function main(){

    const numeros = [8, 0, -1, 13, 15, 51, 14]
    console.log(numeros)

    const pos = 3

    const numeros2 = remove_item_vetor(numeros, pos)
    console.log(numeros2)

    const [numeros3, removido] = vetor_pop(numeros2)
    console.log('Removido: ', removido)
    console.log(numeros3)

}

main()