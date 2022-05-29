import prompt from 'prompt-sync'
const input = prompt()

function main(){
    // (a)
    const totalGasCost = Number(input('Digite o valor inicial da gasolina por litro (em R$): '))
    const actualGasCost = calc_actual_gas_cost(totalGasCost)
    const alcoholCost = calc_alcohol_cost(totalGasCost)

    let petrobrasShare = calc_petrobras_share(actualGasCost)
    let icmsTax = calc_icms_tax(actualGasCost)
    let anhydricEthanolCost = calc_anhydric_ethanol(actualGasCost)
    let stateTaxes = calc_state_taxes(actualGasCost)
    let distributionCosts = calc_distribution_cost(actualGasCost)

    console.log(`Petrobras: R$ ${petrobrasShare.toFixed(2)}`)
    console.log(`ICMS: R$ ${icmsTax.toFixed(2)}`)
    console.log(`Etano anídrico: R$ ${anhydricEthanolCost.toFixed(2)}`)
    console.log(`Impostos estaduais: R$ ${stateTaxes.toFixed(2)}`)
    console.log(`Distribuição e revenda: R$ ${distributionCosts.toFixed(2)}`)

    //(b)
    const petrobrasReajustment = Number(input('Digite o valor do reajuste da Petrobras (em %): '))
    const reajustedGasCost = calc_reajusted_gas_cost(actualGasCost, petrobrasReajustment)
    const finalGasCost = reajustedGasCost + alcoholCost
    const reajustmentTotalCost = calc_reajustment_total_cost(finalGasCost, totalGasCost)

    petrobrasShare = calc_petrobras_share(reajustedGasCost)
    icmsTax = calc_icms_tax(reajustedGasCost)
    anhydricEthanolCost = calc_anhydric_ethanol(reajustedGasCost)
    stateTaxes = calc_state_taxes(reajustedGasCost)
    distributionCosts = calc_distribution_cost(reajustedGasCost)

    console.log(`Petrobras: R$ ${petrobrasShare.toFixed(2)}`)
    console.log(`ICMS: R$ ${icmsTax.toFixed(2)}`)
    console.log(`Etano anídrico: R$ ${anhydricEthanolCost.toFixed(2)}`)
    console.log(`Impostos estaduais: R$ ${stateTaxes.toFixed(2)}`)
    console.log(`Distribuição e revenda: R$ ${distributionCosts.toFixed(2)}`)
    console.log(`Valor final da gasolina: R$ ${finalGasCost.toFixed(2)}`)
    console.log(`Valor final do reajuste: ${reajustmentTotalCost.toFixed(2)}%`)

}

function calc_actual_gas_cost(totalGasCost){
    return totalGasCost * 0.73
}

function calc_alcohol_cost(totalGasCost){
    return totalGasCost * 0.27
}

function calc_petrobras_share(actualGasCost){
    return actualGasCost * 0.36
}

function calc_icms_tax(actualGasCost){
    return actualGasCost * 0.27
}

function calc_anhydric_ethanol(actualGasCost){
    return actualGasCost * 0.13
}

function calc_state_taxes(actualGasCost){
    return actualGasCost * 0.1
}

function calc_distribution_cost(actualGasCost){
    return actualGasCost * 0.14
}

function calc_reajusted_gas_cost(actualGasCost, petrobrasReajustment){
    return actualGasCost + (actualGasCost * (petrobrasReajustment / 100))
}

function calc_reajustment_total_cost(finalGasCost, totalGasCost){
    return ((finalGasCost - totalGasCost) / finalGasCost) * 100
}

main()