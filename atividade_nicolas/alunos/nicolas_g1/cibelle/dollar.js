import { input } from "../io_utils.js";

function main(){
    
    const dollaratual = Number(input('Informe a cotação atual do dollar: R$'))
    const comprardol = Number(input('Quantos dóllares deseja comprar: $'))
    const iof = comprardol*1.1/100
    const valorbr = dollaratual*comprardol+iof
    console.log(valorbr)

}main()