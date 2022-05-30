import prompt  from 'prompt-sync';
const input = prompt()

function main() {
    
    const rend_alcool = Number(input('Digite o redimento (km/l) do seu carro com alcool:'))
    const rend_gasolina = Number(input('Digite o redimento (km/l) do seu carro com gasolina:'))
    const distancia = Number(input('Digite a distância a ser percorrida:'))
    const valor_alcool = Number(input('Preço do alcool (por litro):'))
    const valor_gasolina = Number(input('Preço da gasolina (por litro):'))
    
    const alcool = (distancia/rend_alcool)*valor_alcool
    const gasolina = (distancia/rend_gasolina)*valor_gasolina
    
    console.log(`O valor a ser gasto, em gasolina é: ${gasolina.toFixed(2)}`)
    console.log(`O valor a ser gasto, em alcool é: ${alcool.toFixed(2)}`)

    if( gasolina> alcool) {
        console.log('Recomendamos álcool')
    } else {
        console.log('Recomendamos gasolina')
    }
}


main()