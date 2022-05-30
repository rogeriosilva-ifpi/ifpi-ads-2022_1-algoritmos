
import { input } from "../../io_utils.js";

function main() {
    // entrada
    const renda_mensal = Number(input("Digite o valor da renda mensal: "))
    const valor_emprestimo = Number(input("Digite o valor do emprestimo: "))
    const prazo = Number(input("Digite o prazo em meses: "))


    //process

    const iof = (valor_emprestimo * 0.0038) + (valor_emprestimo * (prazo * 30 * 0.000082))
    const juros = calcular_juros(renda_mensal, valor_emprestimo, prazo, iof)
    const valortotal = (valor_total(renda_mensal, valor_emprestimo, prazo, iof))
    const valorparcela = (valor_parcela(renda_mensal, valor_emprestimo, prazo, iof))
    const situacao = (situacao(renda_mensal, valor_emprestimo, prazo, iof))

    //saida
    console.log(`Valor IOF: ${iof}`)
    console.log(`O valor do juros é ${juros}`)
    console.log(`O valor total é ${valortotal}`)
    console.log(`O valor da parcela é ${valorparcela}`)
    console.log(situacao)



}
main()

function calcular_juros(rm, ve, pr, iof) {

    let juros
    let emprest_iof = ve + iof


    if (pr > 2 && pr <= 6) {
        juros = (emprest_iof * 0.06375)
    } else if (pr >= 7 && pr < 12) {
        juros = (emprest_iof * 0.09562)
    } else if (pr >= 12 && pr < 18) {
        juros = (emprest_iof * 0.1275)
    } else if (pr >= 18 && pr < 24) {
        juros = (emprest_iof * 0.1657)
    }

    return juros

}

function valor_total(rm, ve, pr, iof) {
    let emprest_iof = ve + iof
    let juros = (calcular_juros(rm, ve, pr, iof))
    const total = juros + emprest_iof

    return total
}

function valor_parcela(rm, ve, pr, iof) {
    let total = (valor_total(rm, ve, pr, iof))
    const parcela = total / pr
    return parcela
}

function situacao(rm, ve, pr, iof) {
    let parcela = (valor_parcela(rm, ve, pr, iof))

    if (parcela <= (rm * 0.40)) {
        return "APROVADO"
    } else {
        return "NEGADO"
    }
}
