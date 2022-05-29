import prompt from 'prompt-sync'
const input = prompt()


//logica da questão sem arquivo txt

function main() {
    const txt = Number(input("Digite o valor da sua compra: "))
    console.log(`O cashback foi de R$${cashback(txt)} em cima do R$${txt}`)
}
main()

function cashback(txt) {
    let cashback_txt = 0
    if (txt <= 250) {
        cashback_txt = 0.05 * txt
        return cashback_txt
    } else if (txt > 250 && txt <= 500) {
        cashback_txt = 0.07 * txt
        return cashback_txt
    } else if (txt > 500 && txt <= 750) {
        cashback_txt = 0.08 * txt
        return cashback_txt
    } else {
        cashback_txt = 0.25 * txt
        return cashback_txt
    }
}