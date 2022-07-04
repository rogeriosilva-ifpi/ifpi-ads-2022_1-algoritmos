import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let menu = "-----MENU PARA VETOR-----"

    menu += "\n1 -Criar Vetor-"
    menu += "\n2 -Mostrar Vetor-"
    menu += "\n0 -Sair-"

    console.log(menu)
    
    let opcao = Number (input('Opção: '))

    while(opcao !== 0){

        if(opcao === 1){
            console.clear(menu)
            criar_vetor() 
        }else if(opcao === 2){
            mostrar_vetor()
        }else if(opcao === 0){
            break
        }

        opcao = Number (input('Opção: '))
    }
}

function criar_vetor() {
    
    let vetor
    
    let tamanho = Number (input("Tamanho do vetor: "))
    
    let pergunta = input("Preencher automaticamente: (S/N) ")
    
    if(pergunta === 'S') {
        vetor = criar_vetor_automatico(tamanho)
    }else if (pergunta === 'N') {
        vetor = criar_vetor_manual(tamanho)
    }
    
    return vetor
}

function mostrar_vetor(){
    console.log(criar_vetor())
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


main()