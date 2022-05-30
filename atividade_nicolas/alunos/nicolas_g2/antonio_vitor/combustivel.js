import {print, input} from './io_utils.js'

function main(){

    const valor_combustivel = Number(input('Digite o valor referente ao combustível(em litros):'))
    const reajuste_combustivel = Number(input('Digite o valor referente ao reajuste'))

    const petrobras = 0.32 * valor_combustivel
    const valor_ICMS = 0.27 * valor_combustivel
    const etanol_anidro = 0.13 * valor_combustivel 
    const impostos = 0.10 * valor_combustivel
    const revenda = 0.14 * valor_combustivel

    console.log('Composição:'${petrobras}.toFixed[2]; ${valor_ICMS}.toFixed[2]; ${etanol_anidro}.toFixed[2]; ${impostos}.toFixed[2]; ${revenda}.toFixed[2])
}   

main()