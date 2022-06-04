import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const nome = input('Nome: ')
    const qtd_vezes = obter_numero('Qts vez exibir seu nome: ')
    let contador = 0

    const saudacao = 'Olá ' + nome
    
    while (contador < qtd_vezes){
        console.log(saudacao)
        contador = contador + 1
    }

}

function obter_numero(mensagem){
    return Number(input(mensagem))
}

main()