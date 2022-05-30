const input = require('prompt-sync')()

function main() {
    //Entrada
    const valor_inicial_gasolina = Number(input("Digite o valor da gasolina:"))


    const reajuste = Number(input("Digite o valor do reajuste em %: "))


    //Processamento
    const gasolina = valor_inicial_gasolina * (73 / 100)
    const etanol = valor_inicial_gasolina * (27 / 100)
    const gasolina_reajuste = gasolina + (gasolina * (reajuste / 100))
    const novo_valor_final = gasolina_reajuste + etanol



    const listar = composicao_gasolina(valor_inicial_gasolina)
    console.log(listar)



    const valor_final = composicao_gasolina_final(novo_valor_final)
    console.log(valor_final)


    //Saída
    console.log(`Preço da gasolina: R$ ${gasolina}`)

    console.log(`Preço da gasolina após reajuste: R$${gasolina_reajuste}`)
}
main()


function composicao_gasolina(valor_inicial_gasolina) {
    const petrobras = valor_inicial_gasolina * (36 / 100)
    const icms = valor_inicial_gasolina * (27 / 100)
    const etanol = valor_inicial_gasolina * (13 / 100)
    const cide_pis_cofins = valor_inicial_gasolina * (10 / 100)
    const distribuicao_e_revenda = valor_inicial_gasolina * (14 / 100)

    return `#####
            Composição dos preços##### Petrobras: R$$ { petrobras }
            ICMS: R$$ { icms }
            Etanol: R$$ { etanol }
            Cide, PIS, Pasep e Cofins: R$$ { cide_pis_cofins }
            Distribuição e Revenda: R$$ { distribuicao_e_revenda }

            `
}

function composicao_gasolina_final(novo_valor_final) {
    const petrobras = novo_valor_final * (36 / 100)
    const icms = novo_valor_final * (27 / 100)
    const etanol = novo_valor_final * (13 / 100)
    const cide_pis_cofins = novo_valor_final * (10 / 100)
    const distribuicao_e_revenda = novo_valor_final * (14 / 100)

    return `#####
            Valor final reajustado##### Petrobras: R$$ { petrobras }
            ICMS: R$$ { icms }
            Etanol: R$$ { etanol }
            Cide, PIS, Pasep e Cofins: R$$ { cide_pis_cofins }
            Distribuição e Revenda: R$$ { distribuicao_e_revenda }

            `

}