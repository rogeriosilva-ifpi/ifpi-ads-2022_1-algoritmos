import {input} from "./io_utils.js"

function main(){

    const salario = Number(input("Digite o salário: "))
    const inflacao = Number(input("Digite a inflação: ")) 

    const porcento = inflacao / 100

    const novo_salario = salario + (salario * porcento)

    let incremento = Number(input("Digite o incremento do salário: "))

    let sal = salario

    sal = salario + incremento

    while(sal < novo_salario && incremento === 2 || incremento === 5 || incremento === 10 || incremento === 20 || incremento ===50 || incremento === 100 || incremento === 200){
        incremento = Number(input("Digite o incremento do salário: "))
        sal = sal + incremento
    }
    
}
main()