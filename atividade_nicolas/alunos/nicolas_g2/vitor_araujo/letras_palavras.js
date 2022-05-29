import prompt from 'prompt-sync'
const input = prompt()



function main(){

    //Entradas
    const frase = input('Digite uma frase: ')
    const palavras = frase.split(' ')

    const qtdCaracteres = palavras.length

    let par = 0
    let impar = 0

    let quantidadeDeCaracteres = 0

    for (let palavra of palavras){

        quantidadeDeCaracteres = palavra.length

        if(ehpar(quantidadeDeCaracteres)){
            par++
        } else if (!ehpar(quantidadeDeCaracteres)){
            impar++
        }
    }


    console.log(`\n${par} palavra(s) com tamanho par`)
    console.log(`${impar} palavra(s) com tamanho impar`)
    console.log(`${qtdCaracteres} caracter(es)\n`)


} 

const ehpar = (n1) => {return ((n1 % 2) === 0)}


main()