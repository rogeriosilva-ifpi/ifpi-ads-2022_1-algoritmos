import prompt from 'prompt-sync'
const input = prompt()


function main() {

    const [hora1, min1] = input('Dinide o primeiro momento (no formato hh/mm) : ').split('/').map(Number)
    const [hora2, min2] = input('Dinide o segundo momento (no formato hh/mm) : ').split('/').map(Number)

    const hora_resultado = hora2 - hora1
    if (min1 > min2) {
        const min_result = (min2 + 60) - min1
        const hora = hora_resultado - 1
        console.log(`O intervalo entre os momentos é de ${hora} horas e ${min_result} minutos`)
    } else {
        const min_result = min2 - min1
        console.log(`O intervalo entre os momentos é de ${hora_resultado} horas e ${min_result} minutos`)
    }
}

main()