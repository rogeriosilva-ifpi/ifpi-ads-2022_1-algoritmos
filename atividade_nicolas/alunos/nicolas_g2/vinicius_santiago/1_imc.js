import {print, input} from '../io_utils.js'

function main(){
    const peso = Number(input('Digite o peso(kg): '))
    const altura = Number(input('Digite a altura(m): '))
    const ind_massa_corp = imc(peso, altura)

    if(19.8 <= ind_massa_corp && ind_massa_corp <= 24.9){
        console.log(`Você está no peso ideal`)
    }else if (ind_massa_corp < 19.8){
        const peso_a_ganhar = 19.8 * (altura*altura)
        const total = peso - peso_a_ganhar
        console.log(`Você precisa perder ${total} kg`)

    }else if (ind_massa_corp > 24.9){
        const peso_a_perder = 24.9 * (altura*altura)
        const total = peso - peso_a_perder
        console.log(`Você precisa perder ${total} kg`)
    }



function imc(peso, altura){
    const imc = peso / (altura * altura)

    return imc
}

} 

main()

