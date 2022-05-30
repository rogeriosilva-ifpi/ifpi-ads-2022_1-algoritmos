import prompt from 'prompt-sync'
const input = prompt()

function main() {
    //entrada
    const km_l_alcool = Number(input('Quantos km/l seu carro faz com alcool? '))
    const km_l_gasolina = Number(input('Quantos km/l seu carro faz com gasolina? '))
    const preco_alcool = Number(input('Qual o valor atual do alcool?  R$ '))
    const preco_gasolina = Number(input('Qual o valor atual da gasolina?  R$ '))
    const distancia = Number(input('Que distancia você vai percorrer em km ?  '))
    //eexecuçao
    const gasto_alcool = (distancia/km_l_alcool)*preco_alcool
    const gasto_gasolina = (distancia/km_l_gasolina)*preco_gasolina
    //saida
    console.log(`Caso use alcool seu gasto será de ${gasto_alcool}`)
    console.log(`Caso use gasolina seu gasto será ${gasto_gasolina}`)
    const recomendacao = melhor_option(gasto_alcool,gasto_gasolina)
    console.log(recomendacao)

}

function melhor_option(a,b){
    if(a > b){
        return ("A gasolina é a melhor opção!!!")
    }else if (a < b){
        return ("O alcool é a melhor opção!!!")
    }else {
        return ("Os gastos são iguais!!")
    }
}

main()