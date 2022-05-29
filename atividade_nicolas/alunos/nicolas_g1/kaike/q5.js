import {input} from './io_utils.js'

function main(){
    //Entrada
    const momento_inicio = input('Inicio: ').split('/').map(Number)
    const horas_i = momento_inicio[0]
    const minutos_i = momento_inicio[1]
    const momento_final = input('Final: ').split('/').map(Number)
    const horas_f = momento_final[0]
    const minutos_f = momento_final[1]

    //Saida
    console.log(`A duração foi de ${horas(horas_i,minutos_i,horas_f,minutos_f)} hora(s) e ${minutos(horas_i,minutos_i,horas_f,minutos_f)} minuto(s)`)
}

function valido(horas_i,minutos_i,horas_f,minutos_f){
    if(horas_i > 23 || horas_f > 23){
        return false
    }else if(minutos_i > 59 || minutos_f > 59){
        return false
    }else{
        return true
    }
z
    
}

function horas(horas_i,minutos_i,horas_f,minutos_f){
    let hora_total = 0
    if(valido(horas_i,minutos_i,horas_f,minutos_f)){
        if(horas_i <= horas_f){
            hora_total = horas_f - horas_i
        }else{
            hora_total = (horas_f + 24) - horas_i
        }
        if(minutos_i > minutos_f){
            hora_total = hora_total - 1
        }
    }
    return hora_total
}

function minutos(horas_i,minutos_i,horas_f,minutos_f){
    let minuto_total = 0
    if(valido(horas_i,minutos_i,horas_f,minutos_f)){
        if(minutos_f >= minutos_i){
            minuto_total = minutos_f - minutos_i
        }else{
            minuto_total = (minutos_f + 60) - minutos_i
        }
    }
    return minuto_total
}

main()