import { print, input } from './io_utils.js'



function main(){

    const salario = Number(input("digite seu salario ha 12 meses: "));
    const inflacao = Number(input("digite a inflacao para este ano: "));
    var valorInflacao = (salario*inflacao);
    var incrementos = 0;
    

    print("   digite os incrementos para atingir "+valorInflacao+" reais   ")

    do{

        var incremento = Number(input("digite um valor valido de cedulas: "));
        if(incremento === 2 || incremento === 5 || incremento === 10 || incremento === 20 || incremento === 50 || incremento === 100 ){

            incrementos += incremento;
            if(incrementos < valorInflacao){
                continue;
            }else{
                break;
            }

        }else{
            continue;
        }

    }while(1);

    print("*** SUCESSO,  SEU SALARIO EH: "+(salario+incrementos)+" reais. ***");

}

main();