//gasto combustivel em uma viagem

import { input } from "../../io_utils.js";
function main() {

    //Entrada
    const rend_alc_l = Number(input("Digite o rendimento por litro do veículo com alcool: "))
    const rend_gas_l = Number(input("Digite o rendimento por litro do veículo com gasolina: "))
    const distancia = Number(input("Distancia a ser percorrida em km: "))
    const valor_al = Number(input("Preço do Álcool: "))
    const valor_gs = Number(input("Preço da Gasolina: "))

    //Processamento

    const rec = (recomendacao(rend_alc_l,rend_gas_l,distancia,valor_al,valor_gs))

    //Saída
    console.log (`O valor gasto usando álcool é: R$ ${calcular_viagem_alcool(rend_alc_l,rend_gas_l,distancia,valor_al,valor_gs)}`)
    console.log (`O valor gasto usando gasolina é: R$ ${calcular_viagem_gas(rend_alc_l,rend_gas_l,distancia,valor_al,valor_gs)}`)
    console.log (`Recomenda-se ${rec}`)
}

main()

function calcular_viagem_alcool(ra, rg, dist, val_al, val_gas) {

    const valor_viagem_alc = (dist / ra) * val_al
    return valor_viagem_alc
}

function calcular_viagem_gas(ra, rg, dist, val_al, val_gas) {

    const valor_viagem_gas = (dist / rg) * val_gas
    return valor_viagem_gas


}

function recomendacao (ra, rg, dist, val_al, val_gas){
    if (calcular_viagem_alcool(ra, rg, dist, val_al, val_gas)>calcular_viagem_gas(ra, rg, dist, val_al, val_gas)){
        return "Usar gasolina"
    }else{
        return "Usar álcool"
    }
}