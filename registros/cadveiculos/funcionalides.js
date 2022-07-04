import { input } from '../../io_utils.js'
import { obter_numero_faixa } from './utils.js'

export function novo_veiculo(){
    console.log('**** NOVO VEÍCULO ****')
    const nome = input('Nome: ')
    const ano_fab = input('Ano Fab.: ')
    const montadora = input('Montadora: ')
    const valor = Number(input('Valor R$: '))

    const veiculo = {'nome': nome, 'ano_fab': ano_fab, 'montadora': montadora, 'valor': valor}
    // const veiculo = {nome, ano_fab, montadora, valor}

    return veiculo
}

export function adicionar_veiculo(veiculos, veiculo){
    // TODO: fazer seu push
    // veiculos.push(veiculo)
    return [...veiculos, veiculo]
}

export function listar_veiculos(veiculos){
    console.table(veiculos)
}

export function remover_veiculo(veiculos){
    console.log('**** REMOVER VEÍCULO ****')
    listar_veiculos(veiculos)
    
    const index = obter_numero_faixa(0, veiculos.length - 1)

    // TODO: implementar seu remover na posicao
    veiculos.splice(index, 1)

    console.log('Veiculo removido!')

    return veiculos

}