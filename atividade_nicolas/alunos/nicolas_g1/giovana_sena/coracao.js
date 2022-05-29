import {input} from '../io_utils.js'

function main(){

    const idade = Number(input('Informe a idade: '))
    const fc_atual = Number(input('Informe a FC Atual: '))
    
    const FCmax = 220 - idade

    const zona_atual = (fc_atual * 100) / FCmax 

    if (50 <= zona_atual < 60){
        console.log('\n Atividade moderada')
    }else if (60 <= zona_atual < 70){
        console.log('\n Controle de peso')
    }else if (70 <= zona_atual < 80){
        console.log('\n Aeróbica')
    }else if (80 <= zona_atual < 90){
        console.log('\n Anaeróbica')
    }else if (90 < zona_atual <= 100){
        console.log('\n Esforço máximo')
    }

    console.log('\n - Limites de FC por zona para a idade informada:')
    const c50 = ((50 * FCmax /100))
    const c60 = ((60 * FCmax /100))
    const c70 = ((70 * FCmax /100))
    const c80 = ((80 * FCmax /100))
    const c90 = ((90 * FCmax /100))
    const c100 = ((100 * FCmax /100))
   
    console.log(`.Atividade moderada: de ${c50} bpm até ${c60} bpm.`)
    console.log(`.Controle de peso: de ${c60} bpm até ${c70} bpm.`)
    console.log(`.Aeróbica: de ${c70} bpm até ${c80} bpm.`)
    console.log(`.Anaeróbica: de ${c80} bpm até ${c90} bpm.`)
    console.log(`.Esforço máximo: Acima de ${c100} bpm.`)


}
main()