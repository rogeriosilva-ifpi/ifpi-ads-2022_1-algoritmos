import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let peso = Number(input('Informe o seu peso (KG): '))
    const altura = Number(input('Informe a sua altura: '))

    const imc = peso / (altura * altura)

    const teste_imc = normal_ou_nao(imc)
    const novo_teste = quanto_perder()


    console.log(teste_imc)
    console.log(`Você deve ${novo_teste}`)
}
main()
function normal_ou_nao(imc){
    if(imc >= 19.8 && imc <= 24.9){
        return 'IMC normal'
    }
    else if(imc < 19.8){
        return 'Você deve ganhar peso'
    }
    else if(imc > 24.9){
        return 'Você deve perder peso'
    }
}
//
function quanto_perder(imc, peso){
    while(!(imc >= 19.8 && imc <= 24.9)){
        let mais = 0
        let menos = 0
            if(imc < 19.8){
                peso++
            }
            else if(imc > 24.9){
                menos ++
            }
    }
}