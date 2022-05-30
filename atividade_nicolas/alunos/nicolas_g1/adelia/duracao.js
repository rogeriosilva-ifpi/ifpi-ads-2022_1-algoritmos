import prompt from 'prompt-sync'
const input = prompt()

function main() {

    const momento_inicial = input('Insira hora inicial o formato hh/mm: ')
    const momento_final = input('Insira hora final o formato hh/mm: ')

    const [hora_inicial, minuto_inicial] = momento_inicial.split('/').map(Number)
    const [hora_final, minuto_final] = momento_final.split('/').map(Number)

    if (hora_fora_do_intervalo(hora_final) || hora_fora_do_intervalo(hora_inicial)) {
        console.log('A hora esta fora do intervalo')
    } else if (minuto_fora_do_intervalo(minuto_final) || minuto_fora_do_intervalo(minuto_inicial)) {
        console.log('O minuto está fora do intervalo')
    } else if (hora_final < hora_inicial) {
        console.log('A hora final tem que ser  maior ou igual a inicial')
    } else if (hora_final === hora_inicial) {
        if (minuto_final < minuto_inicial) {
            console.log('A hora final tem que ser  maior ou igual a inicial')
        }
        else {
            calcula_duracao(hora_final, minuto_final, hora_inicial, minuto_inicial)
        }
    }
    else {
        calcula_duracao(hora_final, minuto_final, hora_inicial, minuto_inicial)
    }
}


function calcula_duracao(hora_final, minuto_final, hora_inicial, minuto_inicial) {
    let horas = 0
    let minutos = 0

    if (minuto_final < minuto_inicial) {
        horas = hora_final - hora_inicial - 1
        minutos = minuto_final + 60 - minuto_inicial
    } else if (minuto_final === minuto_inicial) {
        horas = hora_final - hora_inicial
        minutos = 0
    } else{
        horas = hora_final - hora_inicial
        minutos = minuto_final - minuto_inicial
    }

    console.log(`Duracao é de ${horas} horas e ${minutos} minutos`)
}
function hora_fora_do_intervalo(hora) {
    return hora < 0 || hora > 23
}

function minuto_fora_do_intervalo(minuto) {
    return minuto < 0 || minuto > 59
}


main()