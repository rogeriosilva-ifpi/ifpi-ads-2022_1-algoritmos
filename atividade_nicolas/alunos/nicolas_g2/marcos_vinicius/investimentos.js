import prompt from 'prompt-sync'
const input = prompt()

function main() {
    console.clear()

    const salario = Number(input('Salário: '))
    const valor_objetivo = Number(input('Valor de seu objetivo: '))
    const valor_investimento = getInvestimento('Porcentagem do seu salário a ser investido: ')

}

function getInvestimento(msg) {
    const investimento = Number(input(msg))

    
}

main()
