import promp from 'prompt-sync'
const input = promp()

function main(){
    const originalSalary = Number(input('Digite o salário há 12 meses (em R$): '))
    const inflation = Number(input('Digite a inflação acumulada dos últimos 12 meses (em %): '))
    
    const adjustedSalary = calc_adjusted_salary(originalSalary, inflation)

    const finalSalary = calc_final_salary(originalSalary, adjustedSalary)

    console.log(`Salário final (reajustado à inflação): R$ ${finalSalary}`)
}

function calc_adjusted_salary(salary, inflation){
    return salary + (salary * (inflation / 100))
}

function calc_final_salary(originalSalary, adjustedSalary){
    let adjustmentValue = Number(input('Digite o valor da nota a utilizar no acréscimo de salário (notas válidas): '))
    
    while(adjustmentValue !== 1 && adjustmentValue !== 2 && adjustmentValue !== 5 && adjustmentValue !== 10 && adjustmentValue !== 20 && adjustmentValue !== 50 && adjustmentValue !== 100 && adjustmentValue !== 200){
        console.log('Nota inválida!')
        adjustmentValue = Number(input('Digite o valor da nota a utilizar no acréscimo de salário (notas válidas): '))
    }

    let finalSalary = adjustmentValue + originalSalary

    while(finalSalary < adjustedSalary){
        adjustmentValue = Number(input('Digite o valor da nota a utilizar no acréscimo de salário (notas válidas): '))
    
        while(adjustmentValue !== 1 && adjustmentValue !== 2 && adjustmentValue !== 5 && adjustmentValue !== 10 && adjustmentValue !== 20 && adjustmentValue !== 50 && adjustmentValue !== 100 && adjustmentValue !== 200){
            console.log('Nota inválida!')
            adjustmentValue = Number(input('Digite o valor da nota a utilizar no acréscimo de salário (notas válidas): '))
        }
            finalSalary += adjustmentValue 
    }

    return finalSalary
}

main()