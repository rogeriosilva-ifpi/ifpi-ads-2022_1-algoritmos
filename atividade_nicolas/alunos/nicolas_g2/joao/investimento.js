import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const objetivo = input('Qual o seu objetivo: ')
    const quanto_objetivo = Number(input('Quanto você precisa para realizar esse objetivo: '))

    const salario = Number(input('Qual o seu salário: '))
    const porcento = Number(input('Quanto porcento você pretende investir mensalmente? '))
    console.log('*** TAXA DE JUROS (0.01% A 1.00%) ***')
    const taxa = Number(input('Escolha uma taxa de juros: '))

    while()
}
main()