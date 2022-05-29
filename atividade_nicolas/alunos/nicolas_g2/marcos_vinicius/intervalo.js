import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    console.log('Os valores devem ser digitados no formato dd/mm/aaaa hh:mm:ss\n')

    const instante_1 = input('Primeiro instante: ')
    const instante_2 = input('Segundo instante: ')

    const int = calcularIntervaloEntreDoisInstantes(instante_1, instante_2)

    console.log(`\nO intervalo é de ${int[2]} anos, ${int[1]} meses, ${int[0]} dias, ${int[3]} horas, ${int[4]} minutos e ${int[5]} segundos`)
}

function calcularIntervaloEntreDoisInstantes(inst_1, inst_2) {
    const instante_1 = transformarDataParaSegundos(inst_1)
    const instante_2 = transformarDataParaSegundos(inst_2)

    let intervalo_em_segundos = 0

    if (instante_1 > instante_2) {
        intervalo_em_segundos = instante_1 - instante_2
    } else {
        intervalo_em_segundos = instante_2 - instante_1
    }

    return (transformarSegundosParaDataeHora(intervalo_em_segundos))
}

function transformarSegundosParaDataeHora(segundos) {

    const ano = Math.trunc(segundos / 31104000)
    const mes = Math.trunc((segundos - ano*31104000) / 2595000)
    const dia = Math.trunc((segundos - ano*31104000 - mes*2595000) / 86400)
    const hora = Math.trunc((segundos - ano*31104000 - mes*2595000 - dia*86400) / 3600)
    const minuto = Math.trunc((segundos - ano*31104000 - mes*2595000 - dia*86400 - hora*3600) / 60)
    const segundo = Math.trunc(segundos - ano*31104000 - mes*2595000 - dia*86400 - hora*3600 - minuto*60)

    return [dia, mes, ano, hora, minuto, segundo]
}

// dd/mm/aaaa hh:mm:ss

/*
    minuto: 60s
    hora: 3600s
    dia: 86.400
    mes: 2.592.000s
    ano: 31.104.000s
*/

function transformarDataParaSegundos(data_input) {
    const [data, horario] = data_input.split(' ')

    const [dia, mes, ano] = data.split('/').map(Number)
    const [hora, minuto, segundo] = horario.split(':').map(Number)

    const data_em_dia = dia + mes*30 + ano*365
    const horario_em_segundos = segundo + minuto*60 + hora*3600

    return (horario_em_segundos + data_em_dia)
}

main()
