import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const renda_mensal = get_number_positive('Insira sua renda mensal: ')
    const valor_emprestimo_desejado = get_number_positive('Insira o valor desejado para emprestimo: ')
    const prazo_desejado = get_number_positive('Insira o prazo desejado para empréstimo: ')



    if(numero_de_parcelas_eh_valido(prazo_desejado)){
        if(valor_desejado_esta_acima_do_minimo(valor_emprestimo_desejado)){
            const valor_iof = calcular_iof(valor_emprestimo_desejado, prazo_desejado)
            const valor_juros = calcular_juros(valor_emprestimo_desejado, prazo_desejado)
            const valor_total_a_pagar = valor_emprestimo_desejado + valor_juros + valor_iof
            const valor_parcela = calcular_valor_parcela(valor_total_a_pagar, prazo_desejado)
            console.log('Valor IOF: R$', valor_iof.toFixed(2))
            console.log('Valor Juros: R$',valor_juros.toFixed(2))
            console.log('Valor total a pagar: R$',valor_total_a_pagar.toFixed(2))
            console.log('Valor de cada parcela: R$', valor_parcela.toFixed(2))
            if(parcela_esta_dentro_da_faixa_pagavel(valor_parcela, renda_mensal)){
                console.log('Empréstimo aprovado')
            }else{
                console.log('Empréstimo negado')
                console.log('\t O valor da parcela está acima do que o usuário pode pagar')
            }


        }
        else {
            console.log('O valor desejado esta abaixo do minimo')
        }
    }  
    else{
        console.log('O numero de parcelas está fora do intervalo')
    }

}

const numero_de_parcelas_eh_valido = prazo => prazo >= 2 && prazo <=24

const valor_desejado_esta_acima_do_minimo = valor => valor >= 1212

const calcular_iof = (valor, prazo) => (valor * 0.38)/100 + (valor * 0.0082 * prazo * 30)/100 

function calcular_juros(valor, prazo){
    const taxa_selic = 12.75/100
    if(prazo <= 6){
        return 0.5 * taxa_selic * valor
    }else if(prazo <= 12){
        return 0.75 * taxa_selic * valor
    }else if(prazo <= 18){
        return taxa_selic * valor
    }
    return 1.3 * taxa_selic * valor
}

const calcular_valor_parcela = (valor_total_a_pagar, prazo) => valor_total_a_pagar /prazo


const parcela_esta_dentro_da_faixa_pagavel = (valor_parcela, renda_mensal) => valor_parcela <= renda_mensal * 0.4
   

function get_number(msg){
    let value = Number(input(msg))
    if (isNaN(value)){
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}

function get_number_positive(msg){
    let number = get_number(msg)
    
    while (!(number >= 0)){
        console.log(`O número (${number}) nao é positivo. Digite um numero positivo`)
        number = get_number(msg)
    }

    return number

}

main()