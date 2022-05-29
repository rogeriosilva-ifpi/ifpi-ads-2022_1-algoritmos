import { input } from "../io_utils.js"

function main() {
    const frase = input("Escreva uma frase: ").split(" ")
    const contar = frase.length
    const letras = input("Digite a mesma frase para que sejam lidas as letras: ").split("")
    const contar_l = letras.length

    console.log(`A frase possui ${contar} palavras e ${contar_l} letras.`)


}
main()