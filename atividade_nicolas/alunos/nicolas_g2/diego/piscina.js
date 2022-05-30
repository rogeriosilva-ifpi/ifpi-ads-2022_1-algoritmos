import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const capacidade = dimençoes()
}
function dimençoes(){
     const largura = Number(input('Digite a largura da piscina em cm:'))
     const comprimento = Number(input('Digite o comprimento da piscina em cm:'))
     const profundidade = Number(input('Digite a profundidade da piscina em cm:'))
     const volume = (largura * comprimento * profundidade)/1000
     const volume_recomendado = volume * 85/100
     console.log(volume_recomendado)
     const valor_gasto = custo_para_encher(volume_recomendado)

     function custo_para_encher(volume_recomendado){
          const preço = Number(input('Digite quanto custa 1000 litros de água:'))
          if((volume_recomendado % 1000) != 0){
          const quantidade_de_1000_litros = Math.floor(volume_recomendado/1000) + 1
          console.log(`Vai ser gasto ${preço * quantidade_de_1000_litros} para encher ${volume_recomendado}`)
          const custo_mensal = 10/100 * (quantidade_de_1000_litros * preço)
          console.log(`O custo mensal é ${custo_mensal}`)
          }else{
          const quantidade_de_1000_litros = Math.floor(volume_recomendado/1000)
          console.log(`Vai ser gasto ${preço * quantidade_de_1000_litros} para encher ${volume_recomendado}`)
          const custo_mensal = 10/100 * (quantidade_de_1000_litros * preço)
          console.log(`O custo mensal é ${custo_mensal}`)
          }


     }
     

}

main()