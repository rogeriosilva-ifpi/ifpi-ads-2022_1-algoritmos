import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const inicial_gasolina = Number(input('Informe o valor da gasolina: '))

    const petrobras = 0.36 * inicial_gasolina
    const icms = 0.27 * inicial_gasolina
    const etanol = 0.13 * inicial_gasolina
    const cide = 0.1 * inicial_gasolina
    const distribuicao = 0.14 * inicial_gasolina

    console.log('\t*** LISTAGEM ***')
    console.log(`Petrobras: R$ ${petrobras.toFixed(2)}`)
    console.log(`ICMS: R$ ${icms.toFixed(2)}`)
    console.log(`Etanol: R$ ${etanol.toFixed(2)}`)
    console.log(`Cide, PIS/Pasep e Cofins: R$ ${cide.toFixed(2)}`)
    console.log(`Distribuição e Revenda: R$ ${distribuicao.toFixed(2)}`)

    const so_gasolina = 0.73 * inicial_gasolina
    const so_alcool = 0.27 * inicial_gasolina
    console.log('\t*** Peça um Reajuste ***')
    const reajuste1 = Number(input('Novo reajuste em porcentagem para a gasolina: '))
    const reajuste2 = reajuste1 / 100
    const novo_valor = so_gasolina * reajuste2

    const nova_juncao = novo_valor + so_gasolina + so_alcool
    console.log('\t*** APÓS O REAJUSTE ***')

    const Npetrobras = 0.36 * nova_juncao
    const Nicms = 0.27 * nova_juncao
    const Netanol = 0.13 * nova_juncao
    const Ncide = 0.1 * nova_juncao
    const Ndistribuicao = 0.14 * nova_juncao

    console.log(`Petrobras: R$ ${Npetrobras.toFixed(2)}`)
    console.log(`ICMS: R$ ${Nicms.toFixed(2)}`)
    console.log(`Etanol: R$ ${Netanol.toFixed(2)}`)
    console.log(`Cide, PIS/Pasep e Cofins: R$ ${Ncide.toFixed(2)}`)
    console.log(`Distribuição e Revenda: R$ ${Ndistribuicao.toFixed(2)}`)
    
    



    

}
main()