import {input} from '../io_utils.js'
function main(){
    const [idade,fcatual] = (input('Idade e frequência cardíaca atual (Ex: 40 100): ')).split(' ').map(Number)
    console.log('----- Tabela de intensidade da FCmax -----')
    console.log(tabelafcmax(idade))
    console.log(faixaatual(fcatual,idade))
}

function faixaatual(fcatual,idade){
    const fcmax = 220-idade
    if(fcatual<=(0.50*fcmax) && fcatual<(0.60*fcmax)){
        return ('Faixa atual: Atividade moderada')
    } else if(fcatual>=(0.60*fcmax) && fcatual<(0.70*fcmax)){
        return ('Faixa atual: Controle de peso')
    }else if(fcatual>=(0.70*fcmax) && fcatual<(0.80*fcmax)){
        return ('Faixa atual: Aeróbica')
    } else if(fcatual>=(0.80*fcmax) && fcatual<(0.90*fcmax)){
        return ('Faixa atual: Anaeóbica')
    } else{
        return ('Faixa atual: Esforço máximo')
    }
}

function tabelafcmax(idade){
    const fcmax = 220-idade
    const ativmodinic = Math.ceil(0.5*fcmax)
    const ativmodfinal = Math.ceil(0.6*fcmax)
    const contpesofinal = Math.ceil(0.7*fcmax)
    const aerobicafinal = Math.ceil(0.8*fcmax)
    const anaerobicfinal = Math.ceil(0.9*fcmax)
    const esforcomax = Math.ceil(fcmax)
    return (`Atividade moderada: ${ativmodinic} - ${ativmodfinal}\nControle de peso: ${ativmodfinal} - ${contpesofinal}\nAeróbica: ${contpesofinal} - ${aerobicafinal}\nAnaeróbica: ${aerobicafinal} - ${anaerobicfinal}\nEsforço máximo: ${anaerobicfinal} - ${esforcomax}\n`)
}

main()