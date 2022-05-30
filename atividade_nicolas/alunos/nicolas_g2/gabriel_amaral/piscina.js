import prompt from 'prompt-sync'
const input = prompt()

function main(){
    // (a)
    const [poolDimension1, poolDimension2,poolDimension3] = input('Digite as dimensões (comprimento, largura, altura) da piscina (em cm): ').split(' ').map(Number)
    const poolTotalVolume = calc_pool_volume_in_litres(poolDimension1, poolDimension2, poolDimension3)
    const recommendedPoolVolume = calc_recommended_pool_volume(poolTotalVolume)
    
    // (b)
    console.log(`Quantidade de água recomendada para encher a piscina: ${recommendedPoolVolume} L`)
    
    // (c)
    const costPer1000L = Number(input('Digite a o valor (em R$) por cada 1000 litros: '))
    const costToFillPool = calc_cost_to_fill_pool(recommendedPoolVolume, costPer1000L)
    console.log(`Valor gasto para encher a piscina: R$ ${costToFillPool}`)

    // (d)
    const refillVolume = calc_refill_pool_volume(recommendedPoolVolume)
    const costToRefillPool = calc_cost_to_fill_pool(refillVolume, costPer1000L)
    console.log(`Gasto mensal para repôr a água da piscina: R$ ${costToRefillPool}`)
}

function calc_pool_volume_in_litres(length, width, height){
    return (length * width * height) / 1000
}

function calc_recommended_pool_volume(poolVolume){
    return poolVolume * 0.85
}

function calc_cost_to_fill_pool(poolVolume, costPer1000L){
    if(poolVolume % 1000 !== 0){
        return (Math.trunc(poolVolume / 1000) + 1) * costPer1000L
    }else{
        return (poolVolume / 1000) * costPer1000L
    } 
}

function calc_refill_pool_volume(poolVolume){
    return poolVolume * 0.1
}

main()