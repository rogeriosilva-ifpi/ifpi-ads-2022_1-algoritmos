import prompt from "prompt-sync"
const input = prompt()

function main(){
    const valor_compra = Number(input("Insira qual o valor da compra: "))

        if(valor_compra <= 250){
            const cash_back1 = valor_compra * 0.05
                console.log(`Você terá um retorno de ${cash_back1.toFixed(2)} reais que corresponde a 5%.`)
                
        }else if(250 < valor_compra && valor_compra <= 500){
            const cash_back1 = valor_compra * 0.05
                console.log(`Você terá um retorno de ${cash_back1.toFixed(2)}  reais que corresponde a 5%.`)

            const cash_back2 = valor_compra * 0.07
                console.log(`Você terá um retorno de ${cash_back2.toFixed(2)}  reais que corresponde a 7%.`)

            const soma_total1 = cash_back1 + cash_back2 
                console.log(`A soma total dos cash backs será:${soma_total1}`)

        }else if(500 < valor_compra && valor_compra <= 750){
            const cash_back1 = valor_compra * 0.05
                console.log(`Você terá um retorno de ${cash_back1.toFixed(2)}  reais que corresponde a 5%.`)

            const cash_back2 = valor_compra * 0.07
                console.log(`Você terá um retorno de ${cash_back2.toFixed(2)}  reais que corresponde a 7%.`)

            const cash_back3 = valor_compra * 0.08
                console.log(`Você terá um retorno de ${cash_back3.toFixed(2)}  reais que corresponde a 8%.`)

            const soma_total2 = cash_back1 + cash_back2 + cash_back3
                console.log(`A soma total dos cash backs será:${soma_total2}`)

        }else if (750 < valor_compra){

            const cash_back4 = (250 * 0.05) + (250 * 0.07) + (250 * 0.08) + (valor_compra -750) * 0.25
            console.log(`Você terá um retorno de ${cash_back4.toFixed(2)}  reais que corresponde a 25%.`)

        }

}
main()