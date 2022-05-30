import {input} from "./io_utils.js";

function main () {
    const mensagem_binario = input("Digite a mensagem em binário: ");

    const binario_para_decimal = conversorBases(mensagem_binario);

    if (mensagem_binario.length !== 8) {
        console.log("Mensagem corrompida: Sequência de bits inválida.")

    } else {
        if (binario_para_decimal >= 97 && binario_para_decimal <= 122) {
            console.log("Sequência de bits OK");

        } else if (binario_para_decimal >= 48 && binario_para_decimal <= 57) {
            console.log("Sequência de bits OK");

        } else {
            console.log("Mensagem corrompida: Caracteres inválidos")
        }
    }
}

function conversorBases(mensagem_binario) {

    const resultado = ((mensagem_binario[0]) * Math.pow(2, 7)) + ((mensagem_binario[1]) * Math.pow(2, 6)) + ((mensagem_binario[2]) * Math.pow(2, 5)) + ((mensagem_binario[3]) * Math.pow(2, 4)) + ((mensagem_binario[4]) * Math.pow(2, 3)) + ((mensagem_binario[5]) * Math.pow(2, 2)) + ((mensagem_binario[6]) * Math.pow(2, 1)) + ((mensagem_binario[7]) * Math.pow(2, 0))

    return resultado;
}
main();