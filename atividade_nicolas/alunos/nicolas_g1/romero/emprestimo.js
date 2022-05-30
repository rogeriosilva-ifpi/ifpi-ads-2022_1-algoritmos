import prompt from 'prompt-sync';
const input = prompt()

function main() {
    
    const resposta = solicitar_emprestimo()
    console.log(resposta)

    


}

function solicitar_emprestimo() {
    const renda = Number(input('Digite a sua renda mensal:'))
    const valor_emprestimo = Number(input('Digite o valor do empréstimo:'))

    if(valor_emprestimo<1212) {
        return 'ERRO. Valor do empréstimo muito pequeno'
    } else {
        const n_parcelas = Number(input('Digite a quantidade de parcelas:'))

        if(n_parcelas>24 || n_parcelas<2) {
            return 'ERRO. Número de parcelas inválido (min: 2 | max: 24)'
        } else {
            const iof_valor_total = valor_emprestimo*0.0038
            const iof_diario = (valor_emprestimo*0.000082)*(n_parcelas*30)

            const iof_total = iof_diario+iof_valor_total
            const selic_parcial = (iof_total+valor_emprestimo)*0.1275

            const selic_final = get_selic_final(selic_parcial, n_parcelas)

            const valor_total_emprestimo = valor_emprestimo+iof_total+selic_final


            const valor_parcela = valor_total_emprestimo/n_parcelas

            if(valor_parcela>renda*0.4) {
                return 'EMPRESTIMO NEGADO. Valor da parcela acima de 40% da renda'
            } else {
                return `valor IOF: ${iof_total} \nvalor dos juros: ${selic_final.toFixed(2)} \nvalor total: ${valor_total_emprestimo}\nvalor da parcela: ${n_parcelas} de ${valor_parcela.toFixed(2)}\nEMPRESTIMO APROVADO!`
            }
        }
        

        
    }

}

function get_selic_final( selic_parcial, n_parcelas) {

    if( n_parcelas<=6) {
        return selic_parcial*0.5
    } else if(n_parcelas<=12) {
        return selic_parcial*0.75
    } else if( n_parcelas<=18) {
        return selic_parcial*1
    } else if(n_parcelas>18) {
        return selic_parcial*1.3
    }
}

main()
