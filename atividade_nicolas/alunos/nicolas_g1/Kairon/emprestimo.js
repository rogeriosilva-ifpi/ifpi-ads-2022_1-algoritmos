import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    const rendaMensal = Number(input("Informe sua renda mensal: "))
    const valorEmprestimo = Number(input("Informe o valor do empréstimo(min: R$1.212,00): "))
    const prazo = Number(input("Informe o prazo desejado em meses: "))
    //Processameneto
    const prazoDias = prazo * 30
    const valorIOF = (valorEmprestimo * 0.38 / 100) + (prazoDias * 0.0082 / 100)
    const valorTotalPagar = valorEmprestimo + calcularJuros(valorEmprestimo,valorIOF)
    const valorParcela = valorEmprestimo / prazo


    console.log(`Valor do IOF: R$ ${valorIOF.toFixed(2)}`)
    console.log(`Valor dos juros a pagar: R$ ${calcularJuros(valorEmprestimo,valorIOF).toFixed(2)}`)
    console.log(`Valor total a pagar: R$ ${valorTotalPagar.toFixed(2)}`)
    console.log(`Valor da parcela mensal: ${prazo}X de R$ ${valorParcela.toFixed(2)}`)
    if(valorParcela <= (rendaMensal * 0.4)){
        console.log("Empréstimo aprovado!")
    }else{
        console.log("Empréstimo negado!")    
    }


    function calcularJuros(valorEmprestimo, valorIOF){
        let juros
        if(prazo < 7){
            juros = (valorEmprestimo + valorIOF) * 0.5
        }else if(prazo >= 7 && prazo < 12){
            juros = (valorEmprestimo + valorIOF) * 0.75
        }else if(prazo >= 12 && prazo <= 18){
            juros = (valorEmprestimo + valorIOF)
        }else{
            juros = (valorEmprestimo + valorIOF) * 1.3
        }

        return juros
    }


}
main()