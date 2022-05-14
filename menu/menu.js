import prompt from 'prompt-sync'
const input = prompt({sigint: true})

function main(){
    const num1 = Number(input('Número 1: '))
    const num2 = Number(input('Número 2: '))

    showMenu()
    let opcao = Number(input('> '))

    while (opcao !== 0){
        
        console.log(`\t>>> Você escolheu a opção ${opcao}! <<<`)
        
        if (opcao === 1){
            const soma = somar(num1, num2)
            console.log(`A Soma dos valores é: ${soma}`)
        }

        enterToContinue()
        showMenu()
        opcao = Number(input('> '))
    }
}

function somar(valor1, valor2){
    const resultado = valor1 + valor2
    return resultado
} 

function showMenu(){
    console.clear()
    let menu = '***** Meu MENU ****'
    menu += '\n1 - Somar número recebidos'
    menu += '\n2 - Primeira Opção'
    menu += '\n4 - Primeira Opção'
    menu += '\n\n0 - Sair'

    console.log(menu)
}

function enterToContinue(){
    input('\n<enter> para continuar...')
}


main()