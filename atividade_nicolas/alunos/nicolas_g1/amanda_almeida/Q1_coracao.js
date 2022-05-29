
import { input } from "../../io_utils.js";
function main() {

    //entrada
    const idade = Number(input("Digite sua idade: "))
    const freqatual = Number(input("Digite sua frequancia atual: "))

    //Process





    //saida
    console.log(zona_atual(idade, freqatual))

}

main()





function zona_atual(id, fa) {
    let fmax = 220 - id
    if ((0.5 * fmax) <= fa < (0.6 * fmax)) {
        return "Atividade Moderada"

    } else if ((0.6 * fmax) <= fa < 0.7 * fmax) {
        return "Controle de Peso"

    } else if ((0.7 * fmax) <= fa < (0.8 * fmax)) {
        return "Aerobica"

    } else if ((0.8 * fmax) <= fa < (0.9 * fmax)) {
        return "Anaerobica"

    } else {
        return "Esforço Máximo"
    }
}

