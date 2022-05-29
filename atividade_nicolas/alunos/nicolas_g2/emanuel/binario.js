import {input} from "./io_utils.js"

function main(){

    const frase = input("Digite uma frase em binário: ")

    const palavra = frase.split("-")

    const l1 = Number(palavra[0])
    const l2 = Number(palavra[1])
    const l3 = Number(palavra[2])
    const l4 = Number(palavra[3])
    const l5 = Number(palavra[4])
    const l6 = Number(palavra[5])
    const l7 = Number(palavra[6])
    const l8 = Number(palavra[7])

    const valor = l8 *1 + l7 *2 + l6 *4 + l5 *8 + l4 *16 + l3 *32 + l2 *64 + l1 *128

    if(!(palavra.lenght === 8 || valor >= 97 && valor <= 122 || valor >= 48 & valor <= 57 || valor === 32)){
        console.log('Mensagem corrompida: Caracteres inválidos')
    }
}
main()