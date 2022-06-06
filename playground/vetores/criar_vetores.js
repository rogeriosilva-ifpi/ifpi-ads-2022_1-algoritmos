function main(){
    
    // Criar vetor a partir de dados
    const carros = ['Argo', 'Gol', 'Onix']

    // Criar um Vetor vazio com 10 posições (undefined)
    const lista = new Array(10)

    // Criar vetor com um elemento
    const valores = [10]

    // Criar um vetor a partir de outro vetor (copiar)
    const dados = Array.from([2, 4, 5])

    // Criar um vetor a partir de outro vetor (alterando)
    const quadrados = Array.from(dados, (vlr, idx) => vlr*2)

    // Criar um vetor a partir do "nada", e gerar seus valores
    const numeros = Array.from({length: 5}, (valor, index) => index)
    
}

main()