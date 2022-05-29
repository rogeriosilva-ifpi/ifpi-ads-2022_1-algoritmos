import { print, input } from './io_utils.js'
 
function main(){
    var par = 0;
    var impar = 0;
    var caracteres = 0;

    var frase = input("escreva uma frase: ");

    var palavras = frase.split(" ", );

    for(let count = 0; count < palavras.length; count++){
        let contador = palavras[count].length;

        if(contador % 2 === 0){
            par++;
        }else{
            impar++;
        }
        caracteres += palavras[count].length;
    }
    print("\n\n********RESULTADO*********\n");
    print(" palavras de tamanho par: " +par);
    print("\n palavras de tamanho impar: " + impar);
    print("\n quantidade de caracteres: " + caracteres+"\n");
}

    

main();