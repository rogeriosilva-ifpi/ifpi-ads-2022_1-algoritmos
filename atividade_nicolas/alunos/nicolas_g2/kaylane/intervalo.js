import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const [data, horario] = input("Digite uma data e um horario: ").split(" ")
    const [data2, horario2] = input("Digite uma data e um horario: ").split(" ")

    const [dia, mes, ano] = data.split("/")
    const [hora, minutos, segundos] = horario.split(":")

    const [dia2, mes2, ano2] = data2.split("/")
    const [hora2, minuto2, segundo2] = horario2.split(":")

    const anos = ano - ano2
    const meses = anos * 12
    const dias = anos * 365
    const horas = hora * 60
    const minuto = horas * 60
    const segundo = horas * 120

    console.log(`${anos} anos ${meses} meses ${dias} dias \n${horas} horas ${minuto} minutos ${segundo} segundos`)
}
main()