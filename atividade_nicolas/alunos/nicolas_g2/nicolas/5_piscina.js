import prompt from 'prompt-sync'
const input = prompt()

//1kg = 7000cal 22 dias úteis 4 sab e 5 dom
function main(){
    const [l, c, p] = input('Digite as dimensões da piscina em cm:').split(' ').map(Number)
    const price = Number(input('Quanto custa 1000 litros de água na sua cidade?'))
    console.log(`Capacidade máxima: ${capacity(l,c,p)[0]} litros.\nRecomendado encher até ${capacity(l,c,p)[1]} litros.`)
    console.log(`Você vai gastar R$${cust(l, c, p, price)} para encher e R$${manutention(l, c, p, price)} para mantê-la no nível ideal.`)

}

function capacity(l, c, p){
    return [(l*c*p/1000).toFixed(1), (l*c*p*0.85/1000).toFixed(1)]
}

function cust(l, c, p, price){
    const recommended = ((l*c*p)/1000)*0.85
    if(recommended%1000 == 0){
        return price*recommended/1000
    } else if(recommended < 1000){
        return price
    } else {
        return price*(recommended - recommended%1000)/1000 + price
    }
}

function manutention(l, c, p, price){
    const amount = ((l*c*p)/1000)*0.85*0.10
    if(amount%1000 == 0){
        return price*amount/1000
    } else if(amount < 1000){
        return price
    } else {
        return price*(amount - amount%1000)/1000 + price
    } 

}

main()