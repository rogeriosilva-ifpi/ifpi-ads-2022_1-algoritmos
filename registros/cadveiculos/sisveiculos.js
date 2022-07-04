import { input } from '../../io_utils.js'
import {
    adicionar_veiculo,
    listar_veiculos,
    novo_veiculo,
    remover_veiculo
} from './funcionalides.js'


function main(){

    let veiculos = []

    let opcao = show_menu()

    while (opcao !== 0){

        if (opcao === 1){
            let veiculo = novo_veiculo()
            veiculos = adicionar_veiculo(veiculos, veiculo)
        }

        if (opcao === 2){
            listar_veiculos(veiculos)
        }

        if (opcao === 3){
            veiculos = remover_veiculo(veiculos)
        }

        input('<enter> to continue...')
        opcao = show_menu()
    }

    console.clear()
}

function show_menu(){
    console.clear()
    let menu = '****** VEICULOS ******\n'
    menu += '-------------------------\n'
    menu += '1 - Novo Veículo\n'
    menu += '2 - Listar Veículos\n'
    menu += '3 - Remover Veículo\n'

    menu += '\n0 - Sair\n'

    console.log(menu)
    const opcao = Number(input('>> '))

    return opcao

}

main()