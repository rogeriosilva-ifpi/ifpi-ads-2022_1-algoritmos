import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let salario = Number(input('Informe um salário seu, dos últimos 12 meses: '))
    const Pinflacao = Number(input('Inflação durante esse período (%): '))
    const inflacao_salario = (Pinflacao / 100) * salario
    
    console.log(`Inflação sobre salário: ${inflacao_salario}`)

    
    let novo_salario = 0
    while(salario < inflacao_salario){
        novo_salario = Number(input('Informe um incremento para seu salário: '))
        salario += novo_salario
    }
    console.log('Os incrementos foram suficientes')

}
main()