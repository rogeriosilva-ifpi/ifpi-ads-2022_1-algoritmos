import{input,print} from "../io_utils.js"
function main(){

const renda = Number(input('Digite a renda mensal:'))
const valor_emprestimo = Number(input('Digite o valor do emprestimo(Valor min= R$1.212,00):'))
const prazo = Number(input('Digite o prazo desejado (em dias): '))
const valor_max_parcela =renda- (60/100)
}

function iof (prazo, valor_emprestimo){
    const valor_iof = (valor_emprestimo + ((38/100))*valor_emprestimo)+ ((prazo*30)* 0.000082 )

}

function juros(valor_emprestimo,prazo){
    if(prazo<= 6){
       return (12.75 / 2) 
    }if (7<=prazo<=12){
        return (12.75/(75/100))
    }if (12<prazo<=18){
        return 12.75
    }if (12<prazo<=18){
        return (12.75*1.30)
}
}

