import { input } from '../../io_utils.js'

function main(){

    const number = Number(input())

    const numbers = new Array(100)
    numbers[0] = number
    let gamp = 1e18

    for (let i = 1; i < numbers.length; i++){
        numbers[i] = (numbers[i-1]) * 0.5 * gamp
    }

    let divisor = 1
    let result = ''
    for (let i = 0; i < numbers.length; i++){
        
        result = (numbers[i]/divisor).toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4, useGrouping: false }) 
        
        console.log(`N[${i}] = ${result === 'NaN' || result === '∞' ? '0.0000' : result}`)

        divisor *= gamp
    }

}

main()