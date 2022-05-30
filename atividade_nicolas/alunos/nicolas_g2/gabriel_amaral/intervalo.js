import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [date1, time1] = input('Digite uma data e um horário: ').split(' ')
    const [day1, month1, year1] = date1.split('/').map(Number)
    const [hour1, minute1, second1] = time1.split(':').map(Number)
    const totalSeconds1 = calc_total_seconds(day1, month1, year1, hour1, minute1, second1)
    
    const [date2, time2] = input('Digite uma data e um horário: ').split(' ')
    const [day2, month2, year2] = date2.split('/').map(Number)
    const [hour2, minute2, second2] = time2.split(':').map(Number)
    const totalSeconds2 = calc_total_seconds(day2, month2, year2, hour2, minute2, second2)

    const totalSecondsFinal = calc_total_seconds_final(totalSeconds1, totalSeconds2)

    calc_and_show_time_interval(totalSecondsFinal)
}

function calc_total_seconds(day, month, year, hour, minute, second){
    return second + (minute * 60) + (hour * 3600) + (day * 86400) + (month * 2592000) + (year * 946080000)
}

function calc_total_seconds_final(totalSeconds1, totalSeconds2){
    if(totalSeconds1 >= totalSeconds2){
        return totalSeconds1 - totalSeconds2
    }else{
        return totalSeconds2 - totalSeconds1
    }
}

function calc_and_show_time_interval(totalSecondsFinal){
    const finalYear = Math.trunc(totalSecondsFinal / 946080000)
    const remainder1 = totalSecondsFinal % 946080000
    const finalMonth =  Math.trunc(remainder1 / 2592000)
    const remainder2 = remainder1 % 2592000
    const finalDay = Math.trunc(remainder2 / 86400)
    const remainder3 = remainder2 % 86400
    const finalHour = Math.trunc(remainder3 / 3600)
    const remainder4 = remainder3 % 3600
    const finalMinute = Math.trunc(remainder4 / 60)
    const finalSecond = remainder4 % 60

    console.log(`Duração do intervalo: ${finalDay}/${finalMonth}/${finalYear} ${finalHour}:${finalMinute}:${finalSecond}`)
}

main()