import {input} from '../io_utils.js'

function main(){
    const rendimento_alcool = Number(input('Informe o rendimento do veículo com álcool (km/L): '))
    const rendimento_gasolina = Number(input('Informe o rendimento do veículo com gasolina (km/L): '))
    const distancia = Number(input('Informe a distância a ser percorrida (km): '))
    const valor_alcool = Number(input('Informe o preço por litro de álcool: '))
    const valor_gasolina = Number(input('Informe o preço por litro de gasolina: '))

    const calculo1 = (rendimento_alcool/distancia) * valor_alcool

    const calculo2 = (rendimento_gasolina/distancia) * valor_gasolina

    console.log(`Se utilizar álcool o gasto será de R$ ${calculo1.toFixed(2)} e se utilizar gasolina o gasto será de R$ ${calculo2.toFixed(2)}`)

    if (calculo1 > calculo2){
        console.log('Recomenda-se utilizar gasolina!')
    } else {
        console.log('Recomenda-se utilizar ácool!')
    }
}
main()