import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let menu = '**** ROGERPLAY ****'
    menu += '\n1 - Palavras com mais de N letras'
    menu += '\n2 - Mostrar e Contar palavras sem uma determinada letra'
    menu += '\n3 - Upgrade de plano'
    menu += '\n\n0 - Sair'

    const palavras = loadfile().split('\n')

    console.log(`${palavras.length} carregadas!`)

    // estado anterior
    console.log(menu)
    let opcao = Number(input())
    while (opcao !== 0){ // cond. de continuidade
        // trabalho
        if (opcao === 1){
            palavras_com_mais_n_letras(palavras)
        }else if (opcao === 2){
            palavras_sem_letra_x(palavras)
        }else if (opcao === 3){
            console.log('Upgrade de Plano')
        }

        // convergencia dos dados
        input('<enter> para continuar...')
        console.clear()
        console.log(menu)
        opcao = Number(input())
    }

    console.log('Fim!')
}

function palavras_com_mais_n_letras(palavras){
    let contador = 0
    const qtd = input('Mais que quantas letras: ')
   for (let palavra of palavras){
       if (palavra.length > qtd){
           console.log(palavra)
           contador++
       }
   } 
   const percentual = (contador / palavras.length) * 100
   console.log(`Existem ${contador} (${percentual.toFixed(3)}%) com mais de ${qtd} letras`)
}

function palavras_sem_letra_x(palavras){
    const letter = input('Sem qual letra? ')
    let contador = 0
   for (let palavra of palavras){
       if (has_no_letter(palavra, letter)){
           console.log(palavra)
           contador++
       }
   } 
   const percentual = (contador / palavras.length) * 100
   console.log(`Existem ${contador} (${percentual.toFixed(3)}%) sem a letra "${letter}"`) 
}

function has_no_letter(palavra, letter){
    for (let letra of palavra){
        if (letra === letter){
            return false
        }
    }
    return true
}

function loadfile(){
    try{
        const data = fs.readFileSync('palavras.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

main()