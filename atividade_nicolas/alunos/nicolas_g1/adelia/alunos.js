import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const dados_por_aluno = loadfile().split('\n')

    console.log(`${dados_por_aluno.length} linhas carregadas!`)
    let media_classe_soma = 0
    let media = 0

    let counter_prova_final = 0
    let counter_aprovado = 0
    let counter_reprovado = 0
    let counter_reprovado_por_falta = 0

    for (let dado of dados_por_aluno) {
        let dados_destrinchados = dado.split(';')
        let nome = dados_destrinchados[0]
        let nota1 = Number(dados_destrinchados[1])
        let nota2 = Number(dados_destrinchados[2])
        let nota3 = Number(dados_destrinchados[3])
        let faltas = dados_destrinchados[4]

        faltas = faltas.split('/').map(Number)
        let total = faltas[1]
        faltas = faltas[0]

        media = calcula_media(nota1, nota2, nota3)
        media_classe_soma = media_classe_soma + media
        console.log(`A média de ${nome} é ${media.toFixed(2)}`)

        if (aluno_reprovado_por_falta(faltas, total)) {
            console.log('Aluno reprovado por falta')
            counter_reprovado_por_falta++
        } else {
            if (aluno_aprovado(media)) {
                console.log('Aluno aprovado por nota')
                counter_aprovado++

            } else if (aluno_reprovado(media)) {
                console.log('Aluno reprovado por nota')
                counter_reprovado++
            } else {
                console.log('Aluno em prova final')
                counter_prova_final++
            }
        }

    }
    
    const media_final_turma = media_classe_soma/dados_por_aluno.length
    console.log(`\n A media da turma é ${media_final_turma.toFixed(2)}`)
    console.log('Além disso há: ')
    console.log(`\t ${counter_reprovado_por_falta} alunos reprovados por falta`)
    console.log(`\t ${counter_reprovado} alunos reprovados por nota`)
    console.log(`\t ${counter_aprovado} alunos aprovados por nota`)
    console.log(`\t ${counter_prova_final} alunos em prova final`)

}

const calcula_media = (nota1, nota2, nota3) => (nota1 + 2 * nota2 + 3 * nota3) / 6

const aluno_aprovado = media => media >= 7

const aluno_reprovado = media => media < 4

const aluno_reprovado_por_falta = (falta, total) => falta / total > 0.25

function loadfile() {
    try {
        const data = fs.readFileSync('arquivo.txt', 'utf-8')
        return data
    } catch (error) {
        console.error(error)
    }
}


main()

