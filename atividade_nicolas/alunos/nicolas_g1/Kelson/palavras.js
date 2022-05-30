import { input,print } from "../io_utils.js";

function main(){
    const frase = input("Digite uma frase de no minimo 80 e no maximo 180 caracteres: ")
    while(80>frase.length || frase.length<180)frase = input("A frase deve ter no minimo 80 caracteres: ")
    palavras(frase)
}
function palavras(frase){
    const palavras = frase.split(" ")
    for (let palavra of palavras){
        print(palavra)
    }
    print(palavras.length)
}
main()