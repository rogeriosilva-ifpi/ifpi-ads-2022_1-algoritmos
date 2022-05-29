import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numero_inicial = get_number('Digite um numero: ')
    peca_numeros_enquanto_nao_forem_multiplo(numero_inicial)

}

function peca_numeros_enquanto_nao_forem_multiplo(inicial) {
    let list = []
    list.push(inicial)
    const segundo = get_number('Digite um numero: ')
    list.push(segundo)
    let i = 0
    let count_par = 0
    let count_impar = 0
    let count_negativo = 0
    let count_positivo = 0

    while (!eh_multiplo(list[i], list[i + 1])) {
        let numero_seguinte = get_number('Digite um numero: ')
        list.push(numero_seguinte)
    
        i++
    }
    
    for(let numeros of list){
        if (numeros < 0) {
            count_negativo++
        } else {
            count_positivo++
        }
        if (numeros % 2 === 0) {
            count_par++
        } else {
            count_impar++
        }
    }

    console.log(`Numeros pares: ${count_par}`)
    console.log(`Numeros impares: ${count_impar}`)
    console.log(`Numeros negativo: ${count_negativo}`)
    console.log(`Numeros positivo: ${count_positivo}`)
}

const eh_multiplo = (num1, num2) => {
    if (num1 > num2) {
        if (num1 % num2 === 0) {
            return true
        }
        return false
    } else if (num2 > num1) {
        if (num2 % num1 === 0) {
            return true
        }
    }
    return false
}

function get_number(msg) {
    let value = Number(input(msg))
    if (isNaN(value)) {
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}



main()