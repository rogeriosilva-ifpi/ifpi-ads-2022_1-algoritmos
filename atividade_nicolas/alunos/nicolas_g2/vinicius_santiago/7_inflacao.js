import { input } from "../io_utils"

function main(){
    const valor_salario = Number(input('Digite o valor do salário: '))
    const valor_inflacao = Number(input('DIgite o valor da inflação: '))
    const incrementos = Number(input('Digite os incrementos: '))

    while(incrementos < 50 && incrementos < 20 && incrementos < 10 && incrementos < 5 && incrementos < 2){
        const novo_incremento = Number(input('Digite mais incrementos: '))
        console.log(novo_incremento)
    } 

    

}

main()