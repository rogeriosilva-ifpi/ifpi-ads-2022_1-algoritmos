import { input } from '../../io_utils.js'

function main(){
    const message = input('Mensagem em Binário: ')

    const isOk = isMessageOk(message)

    if (isOk){
        console.log('sequência de Bits OK')
    }else{
        console.log('"Mensagem corrompida: Sequência de bits inválida')
    }

}

function isMessageOk(message){
    const octals = message.split('-')
    let character_value

    for (let octal of octals){
        character_value = binary2decimal(octal)
        if (!isValidCharacter(character_value)){
            return false
        }
    }

    return true
}

function binary2decimal(value){
    let i = 0
    let decimal = 0
    let digit_value

    while (i < value.length){
        digit_value =  (2 ** (7 - i)) * Number(value[i])
        // console.log(`i = ${i}, (${value[i]}) --> D: ${digit_value}`)

        decimal = decimal + digit_value
        i++
    }

    // console.log(`Valor D: ${decimal}`)
    return decimal
}

function isValidCharacter(character_value){
    return  (isLowerCase(character_value) 
        || isANumber(character_value) 
        || isBlank(character_value))
}

function isLowerCase(value){
    return value >= 97 && value <= 122
}

function isANumber(value){
    return value >= 48 && value <= 57
}

function isBlank(value){
    return value === 32
}

main()