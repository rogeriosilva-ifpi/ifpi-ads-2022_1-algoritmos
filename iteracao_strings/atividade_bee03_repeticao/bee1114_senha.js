
function main(){
    // let senha = Number(input('Digite a senha: '))
    let index = 0
    let senha = Number(lines[index++])

    while (senha !== 2002){
        console.log('Senha Invalida')
        // senha = Number(input('Digite a senha: '))
        senha = Number(lines[index++])
    }

    console.log('Acesso Permitido')
}

main()