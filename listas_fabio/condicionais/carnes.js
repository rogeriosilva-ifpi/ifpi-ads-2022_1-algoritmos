import { input } from "../../io_utils"

// ESQUEMA / ESTRUTURA

function main(){
    const peso = Number(input('kg: '))
    const tipo = input('Qual Carne')
    let desconto = 0

    const preco_por_kilo = valor_por_kilo(peso, tipo)

    const valor_total = peso * preco_por_kilo

    const eh_cartao_tabajara = verificar_se_eh_cartao()

    if (eh_cartao_tabajara){
        desconto = valor_total * 0.05
    }

    const valor_a_pagar = valor_total - desconto

    console.log('Vlaoas')
    console.log('Vlaoas')
    console.log('Vlaoas')
    console.log('Vlaoas')


}

function valor_por_kilo(peso, tipo){
    if (peso <= 5){
        if (tipo === 'file'){
            return 4.9
        }else if (tipo === 'alcatra'){
            return
        }else{
            // picanha
            return
        }
    }else{
        if (tipo === 'file'){
            return
        }else if (tipo === 'alcatra'){
            return
        }else{
            // picanha
            return
        }
    }
}