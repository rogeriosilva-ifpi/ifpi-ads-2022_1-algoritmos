import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()
    // preço inicial
    const valor_inicial_litro = Number(input('Valor do litro da gasolina: '))

    const composicao = calcularComposicao(valor_inicial_litro)

    console.log(`\n-Petrobras: R$${composicao[0]}\n-ICMS: R$${composicao[1]}\n-Etanol: R$${composicao[2]}`)
    console.log(`-Cide, PIS/Parsep e Confins: R$${composicao[3]}\n-Distribuição e revenda: R$${composicao[4]}\n`)

    // reajuste
    const reajuste = Number(input('Valor em % do reajuste da gasolina na Petrobrás: '))
    const valor_litro_pos_reajuste = calcularReajuste(valor_inicial_litro, reajuste)

    
    const nova_composicao = calcularComposicao(valor_litro_pos_reajuste)
    
    console.log('\n### Novos valores da composição ###')
    console.log(`-Petrobras: R$${nova_composicao[0]}\n-ICMS: R$${nova_composicao[1]}\n-Etanol: R$${nova_composicao[2]}`)
    console.log(`-Cide, PIS/Parsep e Confins: R$${nova_composicao[3]}\n-Distribuição e revenda: R$${nova_composicao[4]}\n`)

    console.log(`Novo preço: ${valor_litro_pos_reajuste}`)

    const reajuste_final = calcularReajusteFinal(valor_inicial_litro, valor_litro_pos_reajuste)
}

function calcularReajuste(valor_inicial, reajuste) {
    const preco_gasolina = ((valor_inicial / 100) * 73)
    const preco_alcool = valor_inicial - preco_gasolina
    const novo_preco_gasolina = (preco_gasolina / 100) * (100 + reajuste)

    return (novo_preco_gasolina + preco_alcool).toFixed(2)
}

function calcularComposicao(valor) {
    const petrobras = ((valor / 100) * 36).toFixed(2)
    const icms = ((valor / 100) * 27).toFixed(2)
    const etanol = ((valor / 100) * 13).toFixed(2)
    const cidepis = ((valor / 100) * 10).toFixed(2)
    const distribuicao = ((valor / 100) * 14).toFixed(2)

    return [petrobras, icms, etanol, cidepis, distribuicao]
}

/*

    36% - Petrobras
    27% - ICMS
    13% - Etanol
    10% - Cide, PIS/Pasep e Confins
    14% - Distribuição e revenda

*/

main()
