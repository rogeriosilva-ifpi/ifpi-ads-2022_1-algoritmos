import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const alunos = loadfile().split('\n')

    const [nome, n1, n2, n3, faltas] = alunos.split(',')
    const qtdd_faltas = faltas.split('/')

    console.log(`Aluno: ${nome}`)

    const media_aluno = Number((n1* + n2*2 + n3*3) / 6)

    verificar_condicao(media_aluno){
        if (media_aluno >= 7){
            console.log('Aprovado')
        }else if (4 <= media_aluno < 7){
            console.log('Em Prova Final')
        }else {
            console.log('Reprovado')
        }
    }

    const media_classe
    const numero_aprovados
    const numero_reprovados
    const numero_prova_final
    
    const reprovados_por_falta = 


}
main()