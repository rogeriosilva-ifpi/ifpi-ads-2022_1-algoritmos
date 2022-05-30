import {input} from './io_utils.js'

function main(){
    //Entrada
    const idade = Number(input('Idade: '))
    const FC_atual = Number(input('FC atual: '))

    const percentual = percent(idade,FC_atual)

    if(percentual >= 50 && percentual < 60){
        console.log('Atividade moderada')
    }else if(percentual >= 60 && percentual < 70){
        console.log('Controle de peso')
    }else if(percentual >= 70 && percentual < 80){
        console.log('Aerobica')
    }else if(percentual >= 80 && percentual < 90){
        console.log('Anaerobica')
    }else if(percentual >= 90 && percentual <= 100){
        console.log('Esforço máximo')
    }
    const limite1 = max(idade) * 0.5999999999999999999999999999999999999
    const limite2 = max(idade) * 0.6999999999999999999999999999999999999
    const limite3 = max(idade) * 0.7999999999999999999999999999999999999
    const limite4 = max(idade) * 0.8999999999999999999999999999999999999

    console.log(`limite Atividade moderada: ${limite1.toFixed(3)}`)
    console.log(`limite Controle de peso: ${limite2.toFixed(3)}`)
    console.log(`limite Aerobica: ${limite3.toFixed(3)}`)
    console.log(`limite Anaerobica: ${limite4.toFixed(3)}`)
    console.log(`limite Esforço maximo: ${max(idade)}`)


}

function max(Idade){
    return 220 - Idade
}

function percent(idade,fc){
    return ((fc/max(idade)) * 100).toFixed(3)
}

main()