import * as fs from 'fs'
import {input} from './io_utils.js'

function main(){
    //Entrada
    const lista_alunos = loadfile().split('\n')
    let aprovados = 0
    let reprovados = 0
    let prova_final = 0
    let reprovados_falta = 0
    let soma_media = 0
    let aluno = 0
    for(let alunos of lista_alunos){
        const dados = alunos.split(';')
        const nome = dados[0]
        const nota1 = dados[1]
        const nota2 = dados[2]
        const nota3 = dados[3]
        const faltas_aulas = dados[4].split('/').map(Number)
        const faltas = faltas_aulas[0]
        const aulas = faltas_aulas[1]
        if(media(nota1,nota2,nota3) >= 7){
            aprovados++
            
        }else if(media(nota1,nota2,nota3) < 7){
            reprovados++
        }
        if(media(nota1,nota2,nota3) >= 4 && media(nota1,nota2,nota3) < 7){
            prova_final++
            reprovados--
        }
        if(reprovados_faltas(faltas,aulas)){
            reprovados_falta++
            aprovados--
        }
        soma_media += media(nota1,nota2,nota3)
        aluno++
        console.log(`Media aluno ${aluno}: ${media(nota1,nota2,nota3)}`)
    }   
    console.log(`Media classe: ${media_classe(soma_media,aluno)}`)
    console.log(`Aprovados: ${aprovados}`)
    console.log(`Reprovados: ${reprovados}`)
    console.log(`Prova final: ${prova_final}`)
    console.log(`Reprovados por falta: ${reprovados_falta}`)
    
    




}

function media_classe(soma_media,alunos){
    const media_c = soma_media / alunos
    return media_c
}

function reprovados_faltas(faltas,aulas){
    const percentual = faltas / aulas
    if(percentual > 0.25){
        return true
    }
    return false
}


function media(n1,n2,n3){
    const media_ponderada = ((n1*1) + (n2*2) + (n3*3)) / (1 + 2 + 3)
    return media_ponderada
    
}

function prova(n1,n2,n3){
    if(!(aprovado(n1,n2,n3))){
        if(media(n1,n2,n3) >= 4 && media(n1,n2,n3) < 7){
            return true
        }
    }
    return false
}


function aprovado(n1,n2,n3){
    if(media(n1,n2,n3) >= 7){
        return true
    }

}


function loadfile(){
    try{
        const data  = fs.readFileSync('alunos.txt','utf-8')
        return data
    }catch(error){
        console.error(error)
    }
}

main()