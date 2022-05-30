import prompt from 'prompt-sync'
const input = prompt()

function main() { //acho q está correto,mas...
    const [A, B] = input('Digite os números (ex: 1,4) : ').split(',').map(Number)

    const mmc = calcular_mmc(A, B)

    console.log(`O mmc dos números digitados é ${mmc}`)

}


function calcular_mmc(a, b) {
    let divisor = 1

    while (divisor % a != 0 && divisor % b != 0) {
        divisor++
    }
    return divisor
}

main()