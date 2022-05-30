import {input} from "../io_utils.js"

function main(){
    const idade = Number(input('Digite uma idade: '))

    const fc_atual = Number(input('Digite uma frequencia atual: '))

    const fc_max = 220 - idade

    const intervalo = verificar_zonas(fc_max, fc_atual)

    console.log(`${intervalo}`)

}
function verificar_zonas(fc_max, fc_atual){
    if(fc_atual >= fc_max * 0.5 && fc_atual <= fc_max * 0.6){
        return 'Atividade Moderada' 
    }else if(fc_atual >= fc_max * 0.6 && fc_atual <= fc_max * 0.7){
        return 'Controle De Peso'
    }else if(fc_atual >= fc_max * 0.7 && fc_atual <= fc_max * 0.8){
        return 'Aeróbica'
    }else if(fc_atual >= fc_max * 0.8 && fc_atual <= fc_max * 0.9){
        return 'Anaérobica'
    }else{
        return 'Esforço Máximo'
    }

}
main()