import fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n');
3002.00
R$ 80.36
1701.12
Isento
4520.00
R$ 355.60

function main(){
    const salario=Number(input("Digite seu salário:"))
    let ir = 0
    
    if (salario <= 2000){
        // isento
    }else if (salario <= 3000){
        // fazer diff entre salario e 2000
        // calcular IR 8% sobre isso
    }else if (salario <= 4500){
        // cacular IR 8% sobre 1000 (valo entre 2k e 3k)
        // calcular diff entre salario e 3000
        // calcular IR 18% sobre isso
    }else{
        // calcular IR 8% sobre 1000
        // calcular IR 18% sobre 1000
        // calcular diff entre salario e 4500
        // calcular IR 28% sobre isso
    }
    

}

main()