import { input } from "../io_utils.js"

function main() {
    const M_inicio = input("Insira um valor para  inicio no formato(hh/mm): ").split(" ").map(Number)
    const n1 = M_inicio[0]
    const n2 = M_inicio[1]

    const M_final = input("Insira um valor para  final no formato(hh/mm): ").split(" ").map(Number)
    const n3 = M_final[0]
    const n4 = M_final[1]
    const verification = intervalo()
    const verification2 = intervalo2()

    console.log(`O intervalos será:${verification}/${verification2}`)

    function intervalo() {
        if (n1 > n3) {
            return n1 - n3
        } else {
            return n3 - n1

        }
    }

    function intervalo2() {
        if (n2 > n4) {

            return n2 - n4
        } else {
            return n4 - n2
        }
    }


}
main()