import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const valorInicialGasolina = Number(input('Digite o valor inicial do litro da Gasolina: '))

    let valorPetrobras = valorInicialGasolina * 0.36 
    let valorICMS = valorInicialGasolina * 0.27
    let etanolAnidro = valorInicialGasolina * 0.13
    let outrosImpostos = valorInicialGasolina * 0.1
    let distribuicao = valorInicialGasolina * 0.14

    console.log(`\tComposição do valor: R$    ${valorInicialGasolina.toFixed(2)}`)
    console.log(`\tPetrobrás:                 ${valorPetrobras.toFixed(2)}`)
    console.log(`\tICMS:                      ${valorICMS.toFixed(2)}`)
    console.log(`\tEtanol Anidro:             ${etanolAnidro.toFixed(2)}`)
    console.log(`\tCide, PIS/Pasep e Confins: ${outrosImpostos.toFixed(2)}`)
    console.log(`\tPetrobrás:                 ${distribuicao.toFixed(2)}`)
    

    const porcentagemReajusteGasolina = Number(input('Digite o valor do reajuste da gasolina em % (ex: 10% seria digitado apenas como 10): '))

    const valorParteGasolina = valorInicialGasolina * 0.73
    const valorParteAlcool = valorInicialGasolina * 0.27

    const valorReajustadoGasolina = valorParteGasolina * (1+ (porcentagemReajusteGasolina/100))

    const valorReajustado = valorParteAlcool + valorReajustadoGasolina

    valorPetrobras = valorReajustado * 0.36 
    valorICMS = valorReajustado * 0.27
    etanolAnidro = valorReajustado * 0.13
    outrosImpostos = valorReajustado * 0.1
    distribuicao = valorReajustado * 0.14

    console.log(`\tValor Reajustado: R$    ${valorReajustado.toFixed(2)}`)
    console.log(`\tPetrobrás:                 ${valorPetrobras.toFixed(2)}`)
    console.log(`\tICMS:                      ${valorICMS.toFixed(2)}`)
    console.log(`\tEtanol Anidro:             ${etanolAnidro.toFixed(2)}`)
    console.log(`\tCide, PIS/Pasep e Confins: ${outrosImpostos.toFixed(2)}`)
    console.log(`\tPetrobrás:                 ${distribuicao.toFixed(2)}`)


} main()