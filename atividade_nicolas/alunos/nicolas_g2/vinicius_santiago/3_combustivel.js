import {print, input} from '../io_utils.js'

function main(){
    const valor_combustivel = Number(input('Digite o valor do combustível: '))
    const valor_reajuste = Number(input('Digite um valor de reajuste: '))
    //impostos de cada parte
    const impostos_petrobras = 0.36 * valor_combustivel
    const impostos_ICMS = 0.27 * valor_combustivel
    const impostos_etanol = 0.13 * valor_combustivel
    const impostos_PIS = 0.10 * valor_combustivel
    const impostos_revenda = 0.14 * valor_combustivel 
    //reajustando de acordo com o usuario
    const reajuste_petrobras = (valor_reajuste * impostos_petrobras) + (0.73 * impostos_petrobras) 
    const reajuste_IMCS = (valor_reajuste * impostos_ICMS) + (0.73 * impostos_ICMS) 
    const reajuste_etanol = (valor_reajuste * impostos_etanol) + (0.73 * impostos_etanol)  
    const reajuste_PIS = (valor_reajuste * impostos_PIS) + (0.73 * impostos_PIS) 
    const reajuste_revenda = (valor_reajuste * impostos_revenda) + (0.73 * impostos_revenda) 



    console.log(`Os novos valores de reajuste são R$ ${reajuste_petrobras}, R$ ${reajuste_IMCS}, R$ ${reajuste_PIS},R$ ${reajuste_etanol}, R$ ${reajuste_revenda}`)
}

main()









