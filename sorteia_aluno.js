import { readFileSync } from 'fs'

function main(){

    const alunos = readFileSync('alunos.txt', 'utf-8').split('\n')

    const sorteado = sortear_aluno(alunos)

    console.log(sorteado)

}

function sortear_aluno(alunos){
    const index = Math.trunc(Math.random()*alunos.length - 1)

    return alunos[index]
}

main()