 function main () {
        const largura = Number(prompt("Digite a largura da piscina:"))
        const comprimento = Number(prompt("Digite o comprimento da piscina: "))
        const profundidade = Number(prompt("Digite a profundidade da piscina: "))
        const valor = Number(prompt("Digite o valor pago por cada 1000 litros de água gastos na piscina: "))
        
          const capacidade = (largura * comprimento * profundidade) / 1000
          const recomendado = (capacidade - 85/100) * 10
          const pago = (capacidade / 1000) * valor
          
        
          console.log(`A capacidade máxima da piscina é de ${capacidade} litros`)
          console.log(`O recomendado seria preencher somente ${recomendado} litros`)
          console.log(`O valor a ser pago por cada 1000 litros será de ${pago}`)
        
          
        }
        
        main()
   