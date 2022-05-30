import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const vendas = loadfile().split(' ')
    const valor_cashback = cashback(vendas[1])
    
}
function loadfile(){
    try{
        const data = fs.readFileSync('vendasmensais.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}
function cashback(vendas){
    for(let cash of vendas){
    if (vendas<250 ){
        const cashback = vendas * 5/100
        console.log(`O cashback é de ${cashback.toFixed(2)} reais`)
        console.log(`O faturamento total é de ${vendas - cashback}`)
        console.log(`A loja investiu ${cashback} em cashback`)

    }else if(vendas >= 250 && vendas <= 500 ){
        const cashback = vendas * 7/100
        console.log(`O cashback é de ${cashback.toFixed(2)} reais`)
        console.log(`O faturamento total é de ${vendas - cashback}`)
        console.log(`A loja investiu ${cashback} em cashback`)

    }else if(vendas > 500 && vendas <= 750 ){
        const cashback = vendas * 8/100
        console.log(`O cashback é de ${cashback.toFixed(2)} reais`)
        console.log(`O faturamento total é de ${vendas - cashback}`)
        console.log(`A loja investiu ${cashback} em cashback`)

    }else if(vendas > 750 ){
        let cashback = (250 * 5/100) + (250 * 7/100) + (250 * 8/100) + ((valor - 750)*25/100)
        console.log(`O cashback é de ${cashback.toFixed(2)} reais`)
        console.log(`O faturamento total é de ${vendas - cashback}`)
        console.log(`A loja investiu ${cashback} em cashback`)

    }
}
}
main()