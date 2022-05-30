import { input } from "../io_utils.js"

function main() {
    const idade = Number(input("Insira uma idade qualquer: "))
    const FC = 220 - idade
    const A_M = FC * 0.5
    const A_M2 = FC * 0.6
    const C_P = FC * 0.6
    const C_P2 = FC * 0.7
    const Aerobio = FC * 0.7
    const aerobico2 = FC * 0.8
    const anaerobico = FC * 0.8
    const anaerobico2 = FC * 0.9
    const esforço_M = FC * 0.9
    const esforço_M2 = FC * 1

    if (FC >= A_M && FC < A_M2) {

        console.log(`A sua zona de atividade moderada é entre ${A_M} e ${A_M2}`)
    }
    if (FC >= C_P && FC < C_P2) {
        console.log(`A sua zona de atividade moderada é entre ${C_P} e ${C_P2}`)
    }
    if (FC >= Aerobio && FC < aerobico2) {
        console.log(`A sua zona de atividade moderada é entre ${Aerobio} e ${aerobico2}`)
    }
    if (FC >= anaerobico && FC < anaerobico2) {
        console.log(`A sua zona de atividade moderada é entre ${anaerobico} e ${anaerobico2}`)
    }
    if (FC >= esforço_M && FC < esforço_M2) {
        console.log(`A sua zona de atividade moderada é entre ${esforço_M} e ${esforço_M2}`)
    }




}
main()