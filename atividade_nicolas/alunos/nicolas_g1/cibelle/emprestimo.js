import { input } from "../io_utils.js";
function main(){
    const rendamensal = Number(input('Renda mensal: R$ '))
    const valoremprestimo = Number(input('Valor do empréstimo: R$ '))
    const prazodesejado = (input('Prazo desejado (Ex: 6x): ')).split('x').map(Number)
    console.log(parcelas(calcularjuros(valoremprestimo,prazodesejado),valoremprestimo,prazodesejado,rendamensal))
}

const parcelas = function parcelas(juros,valemp,prazo,rendmensal){
    if (juros/prazo<0.40*rendmensal){
        juros = juros/prazo
        return (`Parcelas: ${juros}`)
    } else {
        return('Empréstimo negado')
    }
}

function calcularjuros(valemp,prazo){
    if (verificarpossibilidade(valemp,prazo)){
        let juros
        const iof = valemp*((0.38/100)+(prazo*30*0.0082/100))
        const basejuros = (valemp+iof)

        if (prazo>0&&prazo<=6){
            juros = basejuros*0.50*12.75
        }else if (prazo>=7&&prazo<12){
            juros = basejuros*0.75*12.75
        } else if (prazo>=12&&prazo<18){
            juros = basejuros*12.75
        } else if (prazo>=18&&prazo<=24){
            juros = basejuros*1.3*12.75
        }
        return (`IOF: ${iof}\nJuros a pagar: ${juros}`)

    }else {
        return('Empréstimo NEGADO.')
    }
}

function verificarpossibilidade(valemp,prazo){
    if (valemp<1212||prazo>24||prazo<2){
        return false
    } else  {
        return true
    }
}

main()