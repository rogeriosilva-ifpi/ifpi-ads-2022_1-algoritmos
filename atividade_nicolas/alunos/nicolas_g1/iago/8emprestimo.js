import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let selic = 12.75 / 100
    let rendaMensal = input("DIgite sua renda mensal: ")
    let valorEmprestimo = input("Digite o valor do emprestimo desejado: ")
    let prazoDesejado = input("Digite o prazo Desejado")
    let valorIOF = rendaMensal * ((0.38 + (0.0082 * prazoDesejado * 30)) / 100)
    valorEmprestimo = valorEmprestimo
    if (prazoDesejado >= 2 && prazoDesejado <= 24 && valorEmprestimo > 1212 && valorEmprestimo < (rendaMensal * (40 / 100))) {
        if (prazoDesejado == 6) {
            selic = selic * (50 / 100)
        } else if (prazoDesejado >= 7 && prazoDesejado <= 12) {
            selic = selic * (75 / 100)
        } else if (prazoDesejado > 12 && prazoDesejado <= 18) {
            selic = selic
        } else if (prazoDesejado > 18) {
            selic = selic * (130 / 100)
        }
        valorEmprestimo = (valorEmprestimo + valorIOF) - (valorEmprestimo * (selic / 100))
        console.log(`Valor do IOF: ${valorIOF}\nValor dos juros a pagar: ${valorEmprestimo * selic}\nValor Total a pagar: ${valorIOF + valorEmprestimo * (selic/100)}\nValor da parcela mensal: ${valorEmprestimo/prazoDesejado}\nValor aprovado`)
    } else {
        console.log(`Valor do IOF: ${valorIOF}\nValor dos juros a pagar: ${selic}\nValor Total a pagar: ${valorIOF + valorEmprestimo * (selic/100)}\nValor da parcela mensal: ${valorEmprestimo/prazoDesejado}\nValor reprovado`)
    }

}
main()
} //ERRADA