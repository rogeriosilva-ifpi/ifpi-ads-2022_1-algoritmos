import {input} from './utils.js'

function main(){
    const idade = Number(input('insira sua idade: '))
    const result = faixas(idade)
}main()
function faixas(n){
    const fc_atual = Number(input('valor do fc atual: '))
    const fc_max = 220 - n 
    const porcento = fc_max * 0.5
    const porcento_2 = fc_max * 0.6
    const porcento_3 = fc_max * 0.7
    const porcento_4 = fc_max * 0.8
    const porcento_5 = fc_max * 0.9
    console.log(`atividade moderada: ${porcento} - ${porcento_2.toFixed(1)}`)
    console.log(`Controle de peso: ${porcento_2.toFixed(1)} - ${porcento_3.toFixed(1)}`)
    console.log(`Aeróbica: ${porcento_3.toFixed(1)} - ${porcento_4.toFixed(1)}`)
    console.log(`Anaeróbica: ${porcento_4.toFixed(1)} - ${porcento_5.toFixed(1)}`)
    console.log(`Esforço máximo: ${porcento_5.toFixed(1)} - ${fc_max.toFixed(1)}\n Resultado: `)
    if(fc_atual >= porcento && fc_atual < porcento_2){
        console.log(` Atividade moderada: ${porcento} - ${porcento_2}\n limite: ${porcento_2}`)
    }  
    else if(fc_atual >= porcento_2 && fc_atual < porcento_3){
        console.log(`controle de peso! \n limite: ${porcento_3}`)
    }else if(fc_atual >= porcento_3 && fc_atual < porcento_4){
        console.log(`Aeróbica! \n limite: ${porcento_4}`)
    }else if(fc_atual >= porcento_4 && fc_atual < porcento_5){
        console.log(`Anaeróbica! \n limite: ${porcento_5}`)
    }else if(fc_atual >= porcento_5 && fc_atual === fc_max){
        console.log(`Esforço máximo! \n limite: ${fc_max}`)
    }

}