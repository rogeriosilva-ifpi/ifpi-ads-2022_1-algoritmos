import {input} from "./io_utils.js";

function main(){
    const mensagem = input("Digite uma mensagem: ");
    const mensagem_tamanho = mensagem.length;
    console.log(`A mensagem tem ${mensagem_tamanho} caracteres.`);

    const par_ou_impar = mensagemPar(mensagem);
    console.log(`A mensagem tem um tamanho ${par_ou_impar}`)
}

function mensagemPar(mensagem){
    if (mensagem.length % 2 == 0) {
        return "Par";

    } else {
        return "Impar!";
    }
}

main();