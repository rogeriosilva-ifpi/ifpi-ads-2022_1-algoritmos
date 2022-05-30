import { input, print } from "../io_utils.js"

function main() {

    const [numero1, numero2] = (input("Digite dois número inteiros diferentes de 0 (ex: 13 25): ")).split(" ").map(Number);
    print(`O MMC dos números digitados é ${calcula_mmc(numero1, numero2)}`);
    
}

function calcula_mmc(n1, n2) {

    let menor_valor = (n1 < n2) ? n1 : n2;
    let mmc = menor_valor;

    while(mmc % n2 !== 0 && mmc % n2 !== 0) {

        mmc += menor_valor;

    }

    return mmc;

}

main();