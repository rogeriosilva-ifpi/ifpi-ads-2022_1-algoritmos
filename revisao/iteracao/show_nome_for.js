import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const nome = input('Nome: ')
    const qtd_vezes = obter_numero('Qts vez exibir seu nome: ')

    const saudacao = 'Olá ' + nome
    
    // for (estado anterior; condicao continuidade; convergencia){
    //     trabalho 
    // }

    // for (let contador = 0; contador < qtd_vezes; contador = contador + 1){
    //     console.log(saudacao)
    // }

    // C-Like
    
    for (let i = 0; i < qtd_vezes; i++){
        console.log(saudacao)
    }

}

function obter_numero(mensagem){
    return Number(input(mensagem))
}

main()