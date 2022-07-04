import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let tamanho
    let pergunta
    let vetor

    let menu = "-----MENU PARA VETOR-----"

    menu += "\n1 -Criar Vetor-"
    menu += "\n2 -Mostrar Vetor-"
    menu += "\n3 -Valor padrão a um vetor-"
    menu += "\n4 -Mostrar tamanho do vetor-"
    menu += "\n5 -Mostrar maior e menor e suas posições-"
    menu += "\n6 -Média do vetor-"
    menu += "\n7 -Soma do vetor-"
    menu += "\n8 -Números positivos e quantidade-"
    menu += "\n9 -Números negativos e quantidade-"
    menu += "\n0 -Sair-"

    console.log(menu)
    
    let opcao = Number(input('Opção: '))

    while(opcao !== 0){

        if(opcao === 1){
            console.clear(menu)
            tamanho = Number (input("Tamanho do vetor: "))
            pergunta = input("Preencher automaticamente: (S/N) ")
            if(pergunta === 'S') {
                vetor = criar_vetor_automatico(tamanho)
            }else if (pergunta === 'N') {
                vetor = criar_vetor_manual(tamanho)
            }
            console.clear()
            console.log(menu)
        }else if(opcao === 2){
            console.clear()
            console.log(vetor)
            console.log(menu)
        }else if(opcao === 3){
            console.clear()
            vetor = fillfill(vetor, Number(input('Digite um valor padrão: ')))
            console.log(menu)
        }else if(opcao === 4){
            console.clear()
            console.log(`O vetor tem ${tamanho} valores`)
            console.log(menu)
        }else if(opcao === 5){
            console.clear()
            let maior = maior_menor(vetor)[0]
            let posicao_maior = maior_menor(vetor)[1]
            let menor = maior_menor(vetor)[2]
            let posicao_menor = maior_menor(vetor)[3]
            
            console.log(vetor)
            console.log(`O maior é ${maior} na posição ${posicao_maior}`)
            console.log(`O menor é ${menor} na posição ${posicao_menor}`)
            console.log(menu)
        }else if(opcao === 6){
            console.clear()
            let media = media_e_soma_dos_valores(vetor)[1]

            console.log(`Média: ${media}`)
            console.log(menu)
        }else if(opcao === 7){
            console.clear()
            let soma = media_e_soma_dos_valores(vetor)[0]

            console.log(`Soma: ${soma}`)
            console.log(menu)
        }else if(opcao === 8){
            console.clear()

            let count_positivos = negativos_positivos(vetor)[0]
            let positivos = negativos_positivos(vetor)[1]

            console.log(positivos)
            console.log(`${count_positivos} valores positivos.`)
            console.log(menu)
        }else if(opcao === 9){
            console.clear()

            let count_negativos = negativos_positivos(vetor)[2]
            let negativos = negativos_positivos(vetor)[3]

            console.log(negativos)
            console.log(`${count_negativos} valores negativos.`)
            console.log(menu)
        }
        opcao = Number(input('Opção: '))
    }
}


function negativos_positivos(vetor) {

    let count_positivos = 0
    let count_negativos = 0
    let positivos = []
    let negativos = []

    for (let i = 0; i < vetor.length; i++) {

        if(vetor[i] >= 0){
            count_positivos++
            positivos.push(vetor[i])
        }else{
            count_negativos++
            negativos.push(vetor[i])
        }
    }

    return [count_positivos, positivos, count_negativos, negativos]

}


function maior_menor(vetor){

    let maior = 0
    let menor = 999999999
    let posicao_maior 
    let posicao_menor

    for (let i = 0; i < vetor.length; i++) {

        if(vetor[i] > maior){
            maior = vetor[i]
            posicao_maior = i+1
        }

        if(vetor[i] < menor){
            menor = vetor[i]
            posicao_menor = i+1
        }
        
    }

    return [maior, posicao_maior, menor, posicao_menor]

}


function media_e_soma_dos_valores(vetor) {

    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    const media = soma / vetor.length

    return [soma, media]
}


function criar_vetor_automatico(tamanho) {

    let vetor = new Array(tamanho)

    let minimo = Number(input('Valor mínimo: '))
    let maximo = Number(input('Valor máximo: '))

    for(let i = 0; i < tamanho; i++){
        vetor[i] = Math.trunc(Math.random() * (maximo - minimo) + minimo)
    }

    return vetor
}


function criar_vetor_manual(tamanho) {

    let vetor = new Array(tamanho)

    for(let i = 0; i < tamanho; i++){
        vetor[i] = Number(input(`Digite o valor ${i + 1}: `))
    }

    return vetor
}

function fillfill(vetor, valor_padrao){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao
    }

    return vetor
}


main()