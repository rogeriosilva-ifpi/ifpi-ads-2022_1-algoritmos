import prompt from 'prompt-sync'
const input = prompt()



function main() {
    const renda = Number(input('Digite sua renda mensal : R$ '))
    const Valor_emp = Number(input('Digite o valor do emprestimo desejado : R$ '))
    const prazo = Number(input('Digite o prazo desejado : '))

    const IOF = Valor_emp * (38/100 + (8.2/100 * (prazo * 30)))
    const valor_j = calcular_juros(prazo, Valor_emp)
    if (Valor_emp < 1212.00) {
        console.log('O valor do emprestimo desejado é menor que o valor mínimo exigido.')
    } else {
        const valor_pag = ((Valor_emp/prazo) + valor_j) * prazo
        const parcela = (Valor_emp/prazo) + valor_j
        const tabela_resul = mandar_dados(valor_pag,parcela,IOF,valor_j,renda)
        console.log(tabela_resul)
    }

}

function mandar_dados(total_pag,parcela,IOF,juros,renda){
  
    if((renda * (40/100)) < parcela){
       let aprovado_rep = 'APROVADO'

       let retorno = `valor do IOF            : R$ ${IOF.toFixed(2)}`
       retorno += `\nvalor dos juros a pagar : R$ ${juros.toFixed(2)} por mês`
       retorno += `\ntotal a pagar           : R$ ${total_pag.toFixed(2)}`
       retorno += `\nvalor das parcelas      : R$ ${parcela.toFixed(2)}`
       retorno += `\nO emprestimo foi ${aprovado_rep}`
       return retorno
    }else{
        let aprovado_rep = 'REPROVADO'

       let retorno = `valor do IOF            : R$ ${IOF.toFixed(2)}`
       retorno += `\nvalor dos juros a pagar : R$ ${juros.toFixed(2)} por mês`
       retorno += `\ntotal a pagar           : R$ ${total_pag.toFixed(2)}`
       retorno += `\nvalor das parcelas      : R$ ${parcela.toFixed(2)}`
       retorno += `\nO emprestimo foi ${aprovado_rep}`
       return retorno
    }

    
}

function calcular_juros(pz, valor_em) {
    if (pz <= 6) {
        const valor_pag = valor_em * ((12.75 / 100) * 0.5)
        return valor_pag
    } else if (pz <= 12) {
        const valor_pag = valor_em * ((12.75 / 100) * 0.75)
        return valor_pag
    } else if (pz <= 18) {
        const valor_pag = valor_em * (12.75 / 100)
        return valor_pag
    } else if (pz <= 24) {
        const valor_pag = valor_em * ((12.75 / 100) * 1.3)
        return valor_pag
    } else {
        console.log('Prazo digitado é inválido.')
    }
}
main()