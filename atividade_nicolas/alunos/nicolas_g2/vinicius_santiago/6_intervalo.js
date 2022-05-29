import {print, input} from '../io_utils.js'

function main(){
    //recebendo os anos
    const [dia1, mes1, ano1] = input('Digite o ano 1 (DD/MM/AAAA): ').split('/').map(Number) 
    const [dia2, mes2, ano2] = input('Digite o ano 2 (DD/MM/AAAA): ').split('/').map(Number) 
    // recebendo horarios
    const [hora1, minuto1, segundo1] = input('Digite o horário 1 (hh:mm:ss): ').split(':').map(Number) 
    const [hora2, minuto2, segundo2] = input('Digite o horário 2 (hh:mm:ss): ').split(':').map(Number) 
    //intervalo horas
    const intervalo_hora = hora2 - hora1    
    const intervalo_minuto = minuto2 - minuto1
    const intervalo_segundos = segundo2 - segundo1
    //intervalo anos
    const intervalo_ano = ano2 - ano1
    const intervalo_mes = mes2 - mes1
    const intervalo_dia = dia2 - dia1

    console.log(`O intervalo foi de ${intervalo_ano} anos, ${intervalo_mes} meses e ${intervalo_dia} dias. ${intervalo_hora} horas, ${intervalo_minuto} minutos e ${intervalo_segundos} segundos`)
    

}


    
    



main()