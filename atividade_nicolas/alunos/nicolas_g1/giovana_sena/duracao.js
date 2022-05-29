import {input} from '../io_utils.js'

function calcular_minutos(mm1, mm2){
    
    let resultado = 0
    
    if (mm1 > mm2){
        resultado = (60 - mm1) + mm2
    } else {
        resultado = mm2 - mm1
    } return resultado
}


function main(){
    const [hh1, mm1] = input('Momento início: ').split('/').map(Number)
    const [hh2, mm2]= input('Momento final: ').split('/').map(Number)

    if (hh1 > 23 ||hh2 > 23){
        console.log('Os horários não estão no mesmo dia.')
    }

    const quantas_horas = hh2 - hh1

    const quantos_minutos = calcular_minutos(mm1, mm2)

    console.log(`O intervalo entre os momentos tem duração de ${quantas_horas}h ${quantos_minutos}min`)
}
main()