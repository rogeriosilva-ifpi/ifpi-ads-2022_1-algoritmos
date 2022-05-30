import prompt from 'prompt-sync'
const input = prompt()

//1kg = 7000cal 22 dias úteis 4 sab e 5 dom
function main(){
    const first_price = Number(input('Valor inicial do litro da gasolina:'))
    components(first_price)
    const tax = Number(input('Valor em % do reajuste da Petrobras:'))
    const new_price = first_price + (0.73*first_price*(tax/100))
    console.log(`\nValor do novo litro: R$${(new_price).toFixed(2)}\n`)
    components(new_price)
}

function components(value){
    console.log('========= PREÇO DOS COMPONENTES =========')
    console.log(`PETROBRAS: ${(0.73*0.36*value).toFixed(2)}\nICMS: ${(0.73*0.27*value).toFixed(2)}\nETANOL ANIDRO: ${(0.73*0.13*value).toFixed(2)}\nCide, PIS/Pasep e Cofins ${(0.73*0.10*value).toFixed(2)}\nDISTRIBUIÇÃO E REVENDA: ${(0.73*0.14*value).toFixed(2)}`)
}

main()