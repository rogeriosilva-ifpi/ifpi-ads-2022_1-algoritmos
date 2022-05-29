import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let momento_inicio = input("Digite um momento (hh:mm)").split(":").map(Number)
    let momento_final = input("DIgite um segundo momento (hh:mm)").split(":").map(Number)
    let hora_inicio = momento_inicio[0]
    let minuto_inicio = momento_inicio[1]
    let hora_final = momento_final[0]
    let minuto_final = momento_final[1]
    console.log(minuto_final)
    console.log(calcIntervalo(hora_inicio, minuto_inicio, hora_final, minuto_final))
}

function calcIntervalo(hora_inicio, minuto_inicio, hora_final, minuto_final) {
    let intervalo = 0
    if (hora_inicio > hora_final) { //Ex: 12:20 e 10:10
        if (minuto_inicio > minuto_final) {
            return intervalo = `intervalo: ${hora_inicio - hora_final} horas e ${minuto_inicio - minuto_final} minutos`
        } else if (minuto_final > minuto_inicio) { // Ex: 12:20 e 10:30
            return intervalo = `intervalo: ${(hora_inicio - hora_final) - 1} horas e ${60 - minuto_final} minutos`
        }
    } else if (hora_inicio < hora_final) { //Ex: 10:10 e 12:10
        if (minuto_inicio > minuto_final) { //Ex: 10:20 E 12:10
            return intervalo = `intervalo: ${(hora_final - hora_inicio) - 1} horas e ${60 - minuto_final} minutos`
        } else if (minuto_inicio < minuto_final) { //Ex: 10:10 e 12:00
            return intervalo = `intervalo: ${(hora_final - hora_inicio)} horas e ${minuto_final - minuto_inicio} minutos`
        }
    }
}
main()