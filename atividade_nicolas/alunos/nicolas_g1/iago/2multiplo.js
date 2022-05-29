import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let numero1 = 0
    let numero2 = 0
    console.log(calcNumeros(numero1, numero2))
}

function calcNumeros(numero1, numero2) {
    let numeroPar = 0
    let numeroImpar = 0
    let numeroNegativo = 0
    let numeroPositivo = 0
    while (numero1 % numero2 !== 0) {
        let numero1 = input("Digite um numero")
        let numero2 = input("Digite um numero")
        if (numero1 % 2 == 0 && numero2 % 2 == 0) {
            numeroPar += 2
        } else if (numero1 % 2 == 0 || numero2 % 2 == 0) {
            numeroPar++
        }
        if (numero1 % 2 != 0 && numero2 % 2 != 0) {
            numeroImpar += 2
        } else if (numero1 % 2 != 0 || numero2 % 2 != 0) {
            numeroImpar++
        }
        if (numero1 > 0 && numero2 > 0) {
            numeroPositivo += 2
        } else if (numero1 > 0 || numero2 > 0) {
            numeroPositivo++
        }
        if (numero1 < 0 && numero2 < 0) {
            numeroNegativo += 2
        } else if (numero1 < 0 || numero2 < 0) {
            numeroNegativo++
        }
        if (numero1 % numero2 === 0) {
            break;
        }
    }
    return (`Foram digitados ${numeroPar} numeros pares, ${numeroImpar} numeros impares, ${numeroPositivo} numeros positivos e ${numeroNegativo} numeros negativos`)
}
main()