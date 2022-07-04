import {
    criar_vetor_automático, criar_vetor_manual,
    loadfile_arquivo, maior_elemento, menor_elemento, mostrar_menu, mostrar_submenu, novo_vetor_padrao
} from './funcoes_utils.js'
import { input } from './io_utils.js'

function main(){

    mostrar_menu()
    let opcao_menu = input('Opção: ')
    let opcao_submenu
    let tamanho
    let minimo 
    let maximo
    let nome_do_arquivo
    let guarda_vetor 
    let valor_padrao
    let maior 
    let pos_maior
    let menor
    let pos_menor
    
    console.clear()
    
    while(opcao_menu !== '0'){

        if(opcao_menu === 'i'){
            input('<enter> para continuar')
            console.clear()
            mostrar_submenu()
            opcao_submenu = Number(input('>'))
            if(opcao_submenu === 1){
                console.clear()
                tamanho = Number(input('Tamanho do vetor: '))
                minimo = Number(input('Valor mínimo: '))
                maximo = Number(input('Valor máximo: '))
                guarda_vetor = criar_vetor_automático(tamanho, minimo, maximo)
            }
            else if(opcao_submenu === 2){
                console.clear()
                tamanho = Number(input('Tamanho do vetor: '))
                minimo = Number(input('Valor mínimo: '))
                maximo = Number(input('Valor máximo: '))
                guarda_vetor = criar_vetor_manual(tamanho, minimo, maximo)
            }
            else if(opcao_submenu === 3){
                console.clear()
                nome_do_arquivo = input('Nome do arquivo: ')
                tamanho = Number(input('Tamanho do vetor: '))
                minimo = Number(input('Valor mínimo: '))
                maximo = Number(input('Valor máximo: '))
                guarda_vetor = loadfile_arquivo(nome_do_arquivo, tamanho, minimo, maximo)
            } 
        }
        else if(opcao_menu === 'ii'){
            console.log(guarda_vetor)
        }
        else if(opcao_menu === 'iii'){
            valor_padrao = Number(input('Valor padrão: '))
            guarda_vetor = novo_vetor_padrao(tamanho, valor_padrao)
        }
        else if(opcao_menu === 'iv'){
            console.log(`Tamanho do vetor: ${tamanho}`)
        }
        else if(opcao_menu === 'v'){
            maior = maior_elemento(guarda_vetor)[0]
            pos_maior = maior_elemento(guarda_vetor)[1]
            menor = menor_elemento(guarda_vetor)[0]
            pos_menor = menor_elemento(guarda_vetor)[1]
            console.log(`Maior elemento: ${maior}`)
            console.log(`Posição: ${pos_maior}`)
            console.log(`Menor elemento: ${menor}`)
            console.log(`Posição: ${pos_menor}`)
        }
        input('<enter> to continue')

        mostrar_menu()
        opcao_menu = input('opção: ')
    }

}

main()
