import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const salario = Number(input('Digite seu salário: '))
    const porcentagemSalario = Number(input('Quantos % do seu salário você pretende investir? Máx: 30'))

    const objetivo = input('Qual o seu objetivo? ')
    const dinheiroNecessario = Number(input('Digite a quantidade de dinheiro necessário para cumprir seu objetivo: '))

    const taxaDeJurosDeInvestimento = Number(input('Qual a taxa de juros do investimento escolhido? Máx: 1% Min: 0.01% '))

    

    const dinheiroMensal = (salario * porcentagemSalario)/100

    let dinheiroAcumulado = 0

    let meses = 0

    let jurosSobreInvestimento = 0

    if (porcentagemSalario > 30 || (taxaDeJurosDeInvestimento < 0.01) || (taxaDeJurosDeInvestimento > 1)){
        console.log('\tERRO: Condições necessárias não satisfeitas:')

    } else {

        while(dinheiroAcumulado < dinheiroNecessario){
            
            jurosSobreInvestimento = (dinheiroAcumulado * taxaDeJurosDeInvestimento)/100
           
            dinheiroAcumulado += dinheiroMensal
            meses++

        }

        console.log(`\tMariana atingirá seu objetivo (${objetivo}) em ${meses} meses`)

    }
} main()