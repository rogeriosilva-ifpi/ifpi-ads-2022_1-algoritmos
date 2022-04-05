
import { input, print } from "../../io_utils.js"

function main(){
    const PI = 3.14

    const raio = Number(input('Raio da esfera: '))

    const volume = (4 * PI * raio**3)/3

    print(`O volume da esfera é ${volume.toFixed(1)}`)
}

main()