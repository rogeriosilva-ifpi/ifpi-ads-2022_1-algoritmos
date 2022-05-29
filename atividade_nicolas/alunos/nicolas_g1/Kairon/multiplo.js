import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){    
    
    let numero = 0, i = 0
    let num1 = Number(input("Informe um número: "))
    let num2 = Number(input("Informe um número: "))
    while(verificarNaoDivisivel(num1,num2) == true){
        num1 = Number(input("Informe um número: "))
        num2 = Number(input("Informe um número: "))
    }

    function verificarNaoDivisivel(a,b){
        if(a % b != 0){
            return true
        }else{
            return false
        }
    }
}
main()