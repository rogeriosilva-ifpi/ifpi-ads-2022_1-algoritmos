import prompt from 'prompt-sync'
const input = prompt()

//1kg = 7000cal 22 dias úteis 4 sab e 5 dom
function main(){
    const amount = Number(input('Qual o valor do seu salário há 12 meses'))
    const tax = Number(input('Qual o valor da inflação anualizada?'))
    calc(amount, tax)
    if(calc(amount, tax)){
        console.log('Seu salário agora está de acordo com a inflação.')
    }
}

function calc(amount, tax){
    let inf = 0
    while(inf < amount*(1 + tax/100)){
        let note = Number(input('Valor de incremento:R$'))
        if(note == 1 || note == 2 || note == 5 || note == 10 || note == 20 || note == 50 || note ==100  || note == 200){
            inf += note
            if(inf = amount*(1 + tax/100) || inf > amount*(1 + tax/100)){
                break
            }
        } else {
            console.log('Nota inválida!')
        }
    }
    return true
}


main()