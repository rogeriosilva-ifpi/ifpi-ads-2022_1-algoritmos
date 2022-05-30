import { input,print } from "../io_utils.js";

function main(){
    const valores = input("Digite dois numeros: ")
    const [a,b] = valores.split(" ").map(Number)
    const numb = (input("Digite um possivel mmc: "))

     mmc(numb,a,b)
}
function mmc(numb,a,b){
    while(numb % a != 0 && numb % b != 0){
        numb = Number(input("Digite um possivel mmc: "))
    }
    print(`Um mmc de ambos numeros é: ${numb}`)
}
main()