import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const [salario, inflacao] = input("Digite seu salario do ano anterior e o valor da inflacao do mesmo: ").split(" ").map(Number)

    const resultado = reajuste(salario, inflacao)

    console.log(`Novo valor salarial R$${resultado.toFixed}`)

}

main()

function reajuste(salario, inflacao) {
    if (salario > inflacao) {
        const novo_valor = input("Digite um valor adicional: ")
        if (novo_valor === 2 || novo_valor === 5 || novo_valor === 10 || novo_valor === 20 || novo_valor === 50 || novo_valor === 100 || novo_valor === 200) {
            return salario + novo_valor
        } else {
            const novo_valor2 = input("Valor invalido!, digite um novo valor adicional: ")
            return salario + novo_valor2
        }
    } else {
        return false
    }
}