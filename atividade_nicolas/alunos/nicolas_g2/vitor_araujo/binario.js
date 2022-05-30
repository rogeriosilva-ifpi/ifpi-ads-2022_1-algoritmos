import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const mensagemBinaria = input('Digite uma mensagem em binário, de acordo com o enunciado: ')

    const binarios = mensagemBinaria.split('-')

    let verification = 0

    let decimal = 0

    let codigos_invalidos = ""

    if(!verificaLetras(binarios)){
        console.log('\tMensagem corrompida: Sequência de bits inválida')
    } else {
            
        console.log(`${mensagemBinaria} OK`)


        for (let binario of binarios){

            decimal = decimalToBinary(binario)

            if((decimal >= 97 && decimal <= 122) || (decimal >= 48 && decimal <= 57) || (decimal === 32)){

            } else {
                codigos_invalidos += String(binario) + " "
                verification++

            }
        }

        if(verification > 0){
            console.log(`Códigos inválidos: ${codigos_invalidos}`)

        }

    }





} 

function verificaLetra(letraEmBinario){

    if(letraEmBinario.length !== 8){
        return true
    }
    return false
}

function verificaLetras(vetorComLetras){

    for(let letras of vetorComLetras) {
        if(verificaLetra(letras)){
            return false
        }
    }
    
    return true
}

function decimalToBinary(binario){

    const vetor = binario

    const vetor7 = Number(vetor[0]) * (2**7)
    const vetor6 = Number(vetor[1]) * (2**6)
    const vetor5 = Number(vetor[2]) * (2**5)
    const vetor4 = Number(vetor[3]) * (2**4)
    const vetor3 = Number(vetor[4]) * (2**3)
    const vetor2 = Number(vetor[5]) * (2**2)
    const vetor1 = Number(vetor[6]) * (2**1)
    const vetor0 = Number(vetor[7]) * (2**0)

    const decimal = vetor7 + vetor6 + vetor5 + vetor4 + vetor3 + vetor2 + vetor1 + vetor0
    
    return decimal
}


main()