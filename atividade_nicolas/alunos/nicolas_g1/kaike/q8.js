import {input} from './io_utils.js'

function main(){
    //Entrada
    const renda = Number(input('Renda mensal: '))
    const valor = Number(input('Valor do emprestimo: '))
    const prazo = Number(input('Quantas parcelas: '))

    const dias = prazo * 30
    const iof = valor * 0.0038 + dias * 0.000082
    const valor_taxas = (valor * taxa(prazo)) + valor
    const juros = taxa(prazo) * valor + iof
    const valor_total = valor_taxas + iof
    const parcelas = valor_total / prazo
    const parcelas_max = renda * 0.4

    if(valor >= 1212 && prazo >= 2 && prazo < 24 && renda > parcelas && parcelas < parcelas_max){
        console.log('APROVADO')
        console.log(`Valor do IOF: ${iof}`)
        console.log(`Valor dos juros: ${juros}`)
        console.log(`Valor total: ${valor_total}`)
        console.log(`Valor parcela = ${parcelas}`)

    }else{  
        ('NEGADO')
    }


}

function taxa(prazo){
    const selic = 0.1275
    if(prazo <= 6){
        return selic * 0.5
    }else if(prazo >= 7 && prazo < 12){
        return selic * 0.75
    }else if(prazo >= 12 && prazo <= 18){
        return selic
    }else if(prazo > 18){
        return selic * 1.30
    }
}


main()