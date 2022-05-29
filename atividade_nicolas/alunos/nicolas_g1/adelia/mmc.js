import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numero_a = get_number('Digite um numero a: ')
    const numero_b = get_number('Digite um numero b: ')

    const mmc = calcula_mmc(numero_a, numero_b)
    console.log(`MMC eh: ${mmc}`)

}

function calcula_mmc(a, b){
    let num = 1
    while(num%a !== 0 ||num%b !== 0  ){
        num++
    }
    return num
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