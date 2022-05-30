import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const binaryMessage = input('Digite a mensagem em binário: ').split('-')
    
    // (a)
    const checkBits = check_bits_message(binaryMessage)
    
    if(!checkBits){
        console.log('Mensagem corrompida: sequência de bits inválida!')

    }else{
        console.log('Sequência de bits OK!')

        //(b)
        const checkCharacters = check_characters_message(binaryMessage)

        if(checkCharacters){
            console.log('Caracteres OK!')
        }else{
            console.log('Mensagem corrompida: caracteres inválidos!')
        }
        
    }
    
}

function check_bits_message(binaryMessage){
    let counter = 0

    for(let byte of binaryMessage){
        for(let bit of byte){
            counter++
        }
        
        if((counter%8) !== 0){
            return false
        }
    }

    return true
}

function check_characters_message(binaryMessage){
    let counter = 0
    let i = 7
    
    for(let byte of binaryMessage){
        for(let bit of byte){
            if(bit === '1'){
                counter += (2 ** i)
            }
            i--
        }

        if(counter !== 32 && (counter < 48 && counter > 57) && (counter > 97 && counter < 122)){
            return false
        }
    }

    return true
}

main()