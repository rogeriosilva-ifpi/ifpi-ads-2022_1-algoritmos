import { input, print } from "../io_utils.js"

function main() {

    print("Digite uma frase contendo de 80 a 180 caracteres: ");
    const frase = input();
    if(frase_nao_valida(frase)) main();
    print(calcula_palavras(frase));
    
}

function frase_nao_valida(frase) {

    if(frase.length < 80) {
        print("frase menor que 80 caracteres");
        return true;
    } else if(frase.length > 180) {
        print("frase maior que 180 caracteres");
        return true;
    } 

    return false;

}

function calcula_palavras(frase) {

    const qtd_palavras = frase.split(" ").length;

    return `a frase digitada tem ${qtd_palavras} palavras`;

}

main();