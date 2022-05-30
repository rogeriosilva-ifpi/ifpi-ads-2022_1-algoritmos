import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const alunos = loadfile().split('\n')


    for(let aluno of alunos)

    const [nome,nota1,nota2,nota3,f] = aluno.split(;)
    const n1 = nota1.map(Number)
    const n2 = nota2.map(Number)
    const n3 = nota3.map(Number)
    const media_aluno = Number(n1*1+n2*2+n3*3/1+2+3)
    const boletim = resultado(media_aluno)
    const [faltas,aulas] = f.split('/').map(Number)
    const validadepresenca = presenca(faltas,aulas)
    if (validadepresenca === 'REPROVADO POR FALTAS!'){
        return 
    }
     
    const media_classe 
    const aprovados
    const reprovados 
    const deprovafinal
    const reprovadoporfalta

}


function media_ponderada(a){
    if(a >= 7){
        return ('APROVADOOOO!!')
    }else if(a >= 4){
        return('EM PROVA FINAL!')
    }else {
        return('REPROVADO!!')
    }
}

function presenca(faltas,aulas){
    if (faltas > 25*aulas/100){
        return ('REPROVADO POR FALTAS!')
    }
}

function loadfile(){
    try{
        const data = fs.readFileSync('alunos.txt','utf-8')
        return data
    }catch (error){
        console.error(error)
    }
}


main()