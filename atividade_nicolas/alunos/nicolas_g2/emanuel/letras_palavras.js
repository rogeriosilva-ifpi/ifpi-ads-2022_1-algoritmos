import {input} from "./io_utils.js"

function main(){

    const frase = input("Digite uma frase: ")

    const palavra = frase.split(" ").map(Array)

    const letra = palavra.split("")

    console.log(`${palavra}`)
}
main()