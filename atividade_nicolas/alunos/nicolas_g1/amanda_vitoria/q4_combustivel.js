import{input} from '../io_utils.js'

function main(){
    const rendimento_l_alcool = Number(input('Digite o valor do litro do alcool: '))
    const rendimento_l_gasolina = Number(input('Digite o valor do litro da gasolina: '))
    const distancia = Number(input('Digite um valor para a distância: '))
    

    const total_a = rendimento_l_alcool * distancia
    const total_g = rendimento_l_gasolina * distancia
    

    console.log(`Valor gasto com o Álcool: R$${total_a} com a distancia de ${distancia}km`)
    console.log(`Valor gasto com a Gasolina: R$${total_g} com a diatancia de ${distancia}km\n`)

}

main()
