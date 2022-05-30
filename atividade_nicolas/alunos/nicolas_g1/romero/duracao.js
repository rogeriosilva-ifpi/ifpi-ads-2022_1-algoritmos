import prompt from 'prompt-sync';
const input = prompt()

function main() {
    let [hora_inicial, minuto_inicial] = input('Digite o momento inicial (hh:mm):').split(':').map(Number)
    let [hora_final, minuto_final] = input('Digite o momento final (hh:mm):').split(':').map(Number)

    let duracao_min
    let duracao_hora

    if(minuto_final<minuto_inicial) {
        minuto_final+=60
        hora_final-=1

        duracao_min = minuto_final-minuto_inicial
    } else {
        duracao_min = minuto_final-minuto_inicial
    }

    duracao_hora = hora_final-hora_inicial

    console.log(`Duração: ${duracao_hora}:${duracao_min}`)
}

main()