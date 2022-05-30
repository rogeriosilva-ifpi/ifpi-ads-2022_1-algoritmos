import prompt from 'prompt-sync'
const input = prompt()

function main() {
    // Primeiro item.
    console.log('Cálculo da composição do preço da gasolina');
    const gas_price = input('Digite o valor do preço da gasolina em R$: ');
    const petro = gas_price * 0.36;
    const icms = gas_price * 0.27;
    const etanol = gas_price * 0.13;
    const taxes = gas_price * 0.10;
    const distribidora = gas_price * 0.14;
    console.log(`A composição do preço é: ${petro.toFixed(2)} R$ do percentual da Petrobras, ${icms.toFixed(2)} R$ de ICMS, ${etanol.toFixed(2)} R$ do valor do etanol, ${taxes.toFixed(2)} R$ de impostos (PIS, Pasep, Cofins) e ${distribidora.toFixed(2)} R$ do valor de revenda.`);

    // Segundo item.

    console.log('Cálculo do valor do reajuste.');
    const reajustePer = parseFloat(input('Informe um valor percentual para calcular o reajuste da Petrobras do preço da gasolina: '));
    let reajuste = reajustePer * gas_price * 0.73
    console.log(`${reajuste.toFixed(2)} R$ é o valor final para o consumidor com o novo reajuste (somado aos 73 % do preço da gasolina.`);

}

main();