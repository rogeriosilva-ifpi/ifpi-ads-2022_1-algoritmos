import { input,print } from "../io_utils.js";

function main(){
    const rendimento_alcool = input('Informe o rendimento do carro com alcool: ')
    const rendimento_gasolina = input('Informe o rendimento do carro com gasolina: ')
    const distancia = input('Digite a distancia percorrida: ')
    const valores_alcool_gasolina = input('Digite os valores da gasolina e alcool: ')
    const [a,b] = valores_alcool_gasolina.split(" ")

    const resultado1 = alcool(rendimento_alcool,distancia,a)
    const resultado2 = gasolina(rendimento_gasolina,distancia,b)

    print(`Valor a ser usado em alcool: ${resultado1}`)
    print(`Valor a ser usado em alcool: ${resultado2}`)
}
function alcool(r1,distancia,a){
    const valor = (distancia/r1)*a
    return valor
}

function gasolina(r2,distancia,b){
    const valor = (distancia/r2)*b
    return valor
}
main()