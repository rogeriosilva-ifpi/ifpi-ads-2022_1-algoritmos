import prompt from "prompt-sync"
const input = prompt()

function main(){
    let gasolina = Number(input("Insria o atual preço do litro da gasolina: ")) 
    let reajuste 

    const percentual_gaso = gasolina * 0.73
    const petrobras = percentual_gaso * 0.36
    const ICMS = percentual_gaso * 0.27
    const etanol_anidrido = percentual_gaso * 0.13
    const Cide_Pis_PASEPE_cofins = percentual_gaso * 0.10
    const Distribuicao_revenda = percentual_gaso * 0.14
    const soma_total = petrobras+ICMS+etanol_anidrido+Cide_Pis_PASEPE_cofins+Distribuicao_revenda

    console.log(`O preço do imposto petrobras é: ${petrobras.toFixed(2)} reais.`)
    console.log(`O preço do imposto ICMS é: ${ICMS.toFixed(2)} reais.`)
    console.log(`O preço do imposto etanol é: ${etanol_anidrido.toFixed(2)} reais.`)
    console.log(`O preço do imposto Cide,Pis Pasepe e outros cofins é: ${Cide_Pis_PASEPE_cofins.toFixed(2)} reais.`)
    console.log(`O preço do imposto de distribuicao e revenda é: ${Distribuicao_revenda.toFixed(2)} reais.`)
    console.log(`O valor total será: ${soma_total.toFixed(2)} reais.`)


    while(gasolina !== 0 ){
        reajuste = Number(input("Insira o percentual de reajuste sobre o preço da gasolina: "))
        gasolina = gasolina *( 1 + (reajuste/100))
        
        
        const percentual_gaso = gasolina * 0.73
        const petrobras = percentual_gaso * 0.36
        const ICMS = percentual_gaso * 0.27
        const etanol_anidrido = percentual_gaso * 0.13
        const Cide_Pis_PASEPE_cofins = percentual_gaso * 0.10
        const Distribuicao_revenda = percentual_gaso * 0.14
        const soma_total = petrobras+ICMS+etanol_anidrido+Cide_Pis_PASEPE_cofins+Distribuicao_revenda


        console.log(`O preço do imposto petrobras é: ${petrobras.toFixed(2)} reais.`)
        console.log(`O preço do imposto ICMS é: ${ICMS.toFixed(2)} reais.`)
        console.log(`O preço do imposto etanol é: ${etanol_anidrido.toFixed(2)} reais.`)
        console.log(`O preço do imposto Cide,Pis Pasepe e outros cofins é: ${Cide_Pis_PASEPE_cofins.toFixed(2)} reais.`)
        console.log(`O preço do imposto de distribuicao e revenda é: ${Distribuicao_revenda.toFixed(2)} reais.`)
        console.log(`O valor total após o reajuste de ${reajuste}% será: ${soma_total.toFixed(2)} reais.`)
        
        break
    }



}
main()