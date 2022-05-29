import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const horario1 = input('Digite o primeiro horário dd/mm/aa hh/mm/ss')
    const horario2 = input('Digite o primeiro horário dd/mm/aa hh/mm/ss')

    const [data1, tempo1] = horario1.split(' ')
    const [data2, tempo2] = horario2.split(' ')


    const [horas1, minutos1, segundos1] = tempo1.split('/').map(Number)
    const [horas2, minutos2, segundos2] = tempo2.split('/').map(Number)


    const [dia1, mes1, ano1] = Number(quebraData(data1))
    const [dia2, mes2, ano2] = Number(quebraData(data2))

    const dataToHora1 = transformaEmHoras(dia1, mes1, ano1)
    const dataToHora2 = transformaEmHoras(dia2, mes2, ano2)








} 

function quebraData(string){

    const [dia, mes, ano] = string.split('/').map(Number)

    return [dia, mes, ano]
}



function transformaEmHoras(d, m, a){

    const horas = a*365*24 + m*30*24 + d*24

    return horas
    
}






main()