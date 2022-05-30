import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    
    const lista = loadfile('lista_de_nome.txt').split("\n")
    let mediaClasse = 0, mediaAluno = 0, numeroAprovados = 0, numeroReprovados = 0, numeroProvaFinal = 0, reprovadosFalta = 0
    for (let aluno of lista){
        const dados = aluno.split(';')
        const nome = dados[0]
        const nota1 = Number(dados[1])
        const nota2 = Number(dados[2])
        const nota3 = Number(dados[3])
        const falta_aulas = dados[4].split("/").map(Number)
        const faltas = falta_aulas[0]
        const aulas = falta_aulas[1]

        mediaAluno = (nota1 + (nota2 * 2) + (nota3 * 3)) / 6
        mediaClasse += mediaAluno

        if(mediaAluno >= 7){
            numeroAprovados++
        }else if(mediaAluno < 7 && mediaAluno >= 4){
            numeroProvaFinal++
        }else if(mediaAluno < 4){
            numeroReprovados++
        }
        
        if((faltas / aulas) > 25){
            reprovadosFalta++
        }


        console.log(`Aluno: ${nome}. Média: ${mediaAluno.toFixed(2)}`)
    }

   

    console.log(`Média da classe ${mediaClasse.toFixed(2)}`)
    console.log(`Número de aprovados: ${numeroAprovados}`)
    console.log(`O número de reprovados: ${numeroReprovados}`)
    console.log(`O número de prova final: ${numeroProvaFinal}`)
    console.log(`Reprovados por falta: ${reprovadosFalta}`)



    function loadfile(){
        try{
            const data = fs.readFileSync('lista_de_nome.txt', 'utf-8')
            return data
        } catch (error){
            console.error(error)
        }
    }
}
main()