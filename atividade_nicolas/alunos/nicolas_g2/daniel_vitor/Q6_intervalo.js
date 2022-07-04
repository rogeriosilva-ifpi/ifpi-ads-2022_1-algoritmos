import prompt from "prompt-sync"
const input = prompt()


function main() {
    const M_inicio = input("Insira um valor para  inicio no formato (hh/mm/ss): ").split("/").map(Number)
    const n1 = M_inicio[0]
    const n2 = M_inicio[1]
    const n3 = M_inicio[2]


    const M_final = input("Insira um valor para  final no formato (hh/mm/ss): ").split("/").map(Number)
    const nA = M_final[0]
    const nB = M_final[1]
    const nC = M_final[2]

    const data_inicial = input("Insira um valor para uma data inicial no formato(dd/MM/aaaa): ").split("/").map(Number)
    const d1 = data_inicial[0]
    const d2 = data_inicial[1]
    const d3 = data_inicial[2]

    const data_final = input("Insira um valor para uma data inicial no formato(dd/MM/aaaa): ").split("/").map(Number)
    const dE = data_final[0]
    const dF = data_final[1]
    const dG = data_final[2]


    const verification = intervalo()
    const verification2 = intervalo2()
    const verification3 = intervalo3()

    const verification_data = intervalo_data1()
    const verification_data2 = intervalo_data2()
    const verification_data3 = intervalo_data3()



    console.log(`O intervalos será: ${verification} horas ${verification2} minutos e ${verification3} segundos.`)
    console.log(`O intervalos será: ${verification_data} dias ${verification_data2} meses ${verification_data3} anos`)


    function intervalo() {
        if (n1 > nA) {
            return n1 - nA
        } else {
            return nA - n1

        }
    }

    function intervalo2() {
        if (n2 > nB) {

            return n2 - nB
        } else {
            return nB - n2
        }
    }

    function intervalo3() {
        if (n3 > nC) {

            return n3 - nC
        } else {
            return nC - n3
        }
    }

    function intervalo_data1() {
        if (d1 > dE) {
            return d1 - dE
        } else {
            return dE - d1

        }
    }

    function intervalo_data2() {
        if (d2 > dF) {

            return d2 - dF
        } else {
            return dF - d2
        }
    }

    function intervalo_data3() {
        if (d3 > dG) {

            return d3 - dG
        } else {
            return dG - d3
        }
    }
}
main()