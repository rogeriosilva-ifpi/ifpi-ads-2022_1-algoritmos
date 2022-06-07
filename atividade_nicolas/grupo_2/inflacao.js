import { input } from '../../io_utils.js'

function main(){
    const inflacao = Number(input('Inflação 12 meses: '))
    let salario = Number(input('Salário atual: '))
    let aumento

    const salario_alvo = salario + (salario * inflacao / 100)

    while (salario < salario_alvo){
       aumento = obter_aumento_salario()
       salario = salario + aumento 

       console.log('Salario atual R$', salario.toFixed(2))
    }

    console.log(`Novo salário ${salario}`)

}

function obter_aumento_salario(){
    let aumento = Number(input('Aumento: '))
    while (!eh_cedula_reais(aumento)){
        console.log('Digite um valor de cédulas de R$')
        aumento = Number(input('Aumento: '))
    }

    return aumento
}

function eh_cedula_reais(valor){
    return (valor === 2 || valor === 5 || valor === 10 || valor === 20 || valor === 50 || valor === 100 || valor === 200)
}

main()