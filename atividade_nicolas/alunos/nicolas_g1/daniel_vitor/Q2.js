import { input } from "../io_utils.js"

function main() {
    const num = input("Insira um número qualquer: ").split(" ").map(Number)
    const qtd = num.length
    const div = num[0] % num[1]

    while (div == 0)
        if (num[0] > num[1]) {

            console.log(` O ${num[0]} e o ${num[1]} são múltiplos entre si`)
        }




}
main()