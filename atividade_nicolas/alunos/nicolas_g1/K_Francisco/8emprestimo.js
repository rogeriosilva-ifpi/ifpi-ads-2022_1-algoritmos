import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const rendamensal = Number(input('Qual sua renda mensal? '))
    const valor_emprestimo = Number(input('Quanto deseja emprestado? (o valor deve ser acima de R$ 1212.00 reais) '))
    const prazo = Number(input('Em quantas parcelas deseja pagar? (entre 2x e 24x)'))
    //EXECUCAO
    const IOF = (valor_emprestimo*0.38)+((prazo*30)*0.0082)/100
    const valor_sem_juros = valor_emprestimo+IOF
    const juros = calculojuros(prazo,valor_emprestimo)
    const valor_a_pagar = valor_sem_juros + juros
    const valor_parcela = valor_a_pagar/prazo
    const validade = aprovado(rendamensal,valor_parcela)
    //SAIDA
    console.log(`O valor do IOF é R$ ${IOF}`)
    console.log(`O valor dos juros a pagar é R$ ${juros}`)
    console.log(`O valor total a pagar será R$ ${valor_a_pagar}`)
    console.log(`O valor das parcelas serão de ${prazo}x de R$ ${valor_parcela}`)
    console.log(`O seu emprestim foi ${validade}`)
}

function calculojuros(p,ve){
    if(ve === 2 || ve <= 6 ){
        return (50*12.75/100)
    }else if (ve === 7 || ve <= 12){
        return (75*12.75/100)
    }else if (ve === 12 || ve <= 18){
        return (100*12.75/100)
    }else if (ve > 18){
        return(130*12.75/100)
    }
}

function aprovado(renda,valor){
    if(40*renda/100 <= valor){
        return ('APROVADO!!!')
    }else {
        return('NEGADO!!!')
    }
}