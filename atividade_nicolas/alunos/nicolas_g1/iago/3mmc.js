import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let numero1 = Number(input("Digite o primeiro numero"))
    let numero2 = Number(input("Digite o segundo numero"))
    console.log(mmc(numero1, numero2))
}

export function mmc(n1, n2) {
    var resto, x, y;
    x = n1;
    y = n2;
    while (resto != 0) {
        resto = x % y;
        x = y;
        y = resto;
    }
    return (n1 * n2) / x;
}
main()