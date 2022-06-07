import { input } from '../../io_utils.js'

function main(){
    const peso = Number(input('Peso: '))
    const altura = Number(input('Altura: '))
    let novo_peso, kilos, calorias_diarias, deficit_calorico
    const IMC = calcular_imc(peso, altura)

    console.log(`Seu IMC é ${IMC.toFixed(1)}`)

    if (IMC < 19.8){
        console.log('Você está abaixo do peso')
        novo_peso = 19.8 * (altura*altura)
        kilos = novo_peso - peso
        console.log(`Você deverá ganhar ${kilos.toFixed(1)} kg em 90 dias (Peso Alvo: ${novo_peso.toFixed(1)})`)

        calorias_diarias = Number(input('Calorias diárias: '))
        const superavit_calorico = kilos * 7000
        
        const aumento_calorico_diario = superavit_calorico / 90
        console.log(`Você deverá aumentar sua dieta em ${aumento_calorico_diario.toFixed(1)} calorias`)

    }else if (IMC > 24.9){
        console.log('Você está acima do peso')
        novo_peso = 24.9 * (altura*altura)
        kilos = peso - novo_peso
        console.log(`Você deverá perder ${kilos.toFixed(1)} kg em 90 dias  (Peso Alvo: ${novo_peso.toFixed(1)})`)

        calorias_diarias = Number(input('Calorias diárias: '))
        deficit_calorico = kilos * 7000
        const defict_diario = deficit_calorico / 23 * 3
        const sabados = defict_diario / 2

        console.log(`Você deverá gastar ${defict_diario} calorias em dias úteis além do normal`)
        console.log(`Você deverá gastar ${sabados} calorias aos sábados além do normal`)
        console.log('Aos domingo não terá atividade.')
    }else{
        console.log('Você tá na Faixa Normal')
    }

    
}

function calcular_imc(peso, altura){
    return peso / (altura*altura)
}

main()