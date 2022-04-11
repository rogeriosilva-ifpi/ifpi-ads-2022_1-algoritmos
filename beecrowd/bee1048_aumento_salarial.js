//import { input } from '../io_utils.js'
//const input = require('fs').readFileSync('/dev/stdin', 'utf8');
import fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n');


function main(){
    //const salario = Number(input('Digite o salario: '))
    const salario = Number(lines[0])
    let percentual = 0

    if(salario <= 400){
        percentual = 15
    } else if(salario <= 800){
        percentual = 12
    } else if(salario <= 1200){
        percentual = 10          
    } else if(salario <=2000){
        percentual = 7
    } else {
        percentual = 4
    }

    const aumento = salario * percentual/100
    const novo_salario = aumento + salario

    console.log(`Novo salario: ${novo_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`)
    console.log(`Em percentual: ${percentual} %`)
    
}

main()