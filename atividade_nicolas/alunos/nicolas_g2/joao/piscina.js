import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const largura = Number(input('Largura: '))
    const comprimento = Number(input('Comprimento: '))
    const profundidade = Number(input('Profundidade: '))

    const capacidade_total = largura * comprimento * profundidade
    const capacidade_recomendavel = (capacidade_total * 0.85) / 1000

    console.log(`Recomenda-se encher a piscina até ${capacidade_recomendavel} litros`)
    
    const valor_agua = Number(input('Informe o valor gasto a cada 1000 litros: '))
    
    if(capacidade_recomendavel > 0 && capacidade_recomendavel <= 1000){
        let despesa_encher = valor_agua * Math.trunc(capacidade_recomendavel / 1000) + valor_agua
        console.log(`Despesa para encher a piscina: ${despesa_encher}`)
        let evaporacao1 = (despesa_encher * 0.1)
        //let evaporacao2 = evaporacao1 + despesa_encher
        console.log(`Para manter a piscina cheia são necessários R$ ${evaporacao1.toFixed(2)} a mais por mês`)
    }
    else if(capacidade_recomendavel >= 1000){
        const inteiro = Math.trunc(Math.ceil(capacidade_recomendavel / 1000))
        let despesa_encher = valor_agua * inteiro
        console.log(`Despesa para encher a piscina: R$ ${despesa_encher.toFixed(2)}`)
    }
}
main()
