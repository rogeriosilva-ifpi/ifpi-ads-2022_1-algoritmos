import prompt from 'prompt-sync'
const input = prompt()

function main(){

const salario = Number(input('Digite o salário de um trabalhador há 12 meses: '))

const inflacao = Number(input('Digite o valor da inflacao em porcentagem, ex: 12.5: '))

const salario_necessario = salario * (1 + (inflacao/100))

let salario_atualizado = salario

let cedula

while(salario_atualizado < salario_necessario){

    cedula = verificaCelula()
    salario_atualizado += cedula
}

console.log(`Salário atualizado: R$ ${salario_atualizado}`)


    
} 



function existeCedula (c1){

    const cedulas = [2, 5, 20, 50, 10, 100, 200]

    for(let cedula of cedulas){
        if(c1 === cedula){
            return true
        }
    }
    return false
}



function verificaCelula(){
    let cedula = Number(input('Digite o valor de uma cédula: '))

    while(!existeCedula(cedula)){
        console.log('ERRO: Cédula inválida')
        cedula = Number(input('Digite o valor de uma cédula: '))
    }

    return cedula 
}






main()