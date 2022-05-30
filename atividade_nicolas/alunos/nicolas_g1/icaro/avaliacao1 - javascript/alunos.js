import { input, print } from "../io_utils.js"
import { readFileSync } from "fs"

let somas_notas_classe = 0;
let qtd_aprovados = 0;
let qtd_reprovados = 0;
let qtd_prova_final = 0;
let qtd_reprovados_por_falta = 0;

function main() {

    const lista_alunos = readFileSync("alunos.txt", "utf-8").split("\n");
    calcula_informacoes_alunos(lista_alunos);
    print(`\na media da classe é ${(somas_notas_classe/lista_alunos.length).toFixed(2)}`);
    print(`${qtd_aprovados} alunos foram aprovados`);
    print(`${qtd_reprovados} alunos foram reprovados`);
    print(`${qtd_prova_final} alunos ficaram de prova final`);
    print(`${qtd_reprovados_por_falta} alunos foram reprovados por falta`);
    
}

function calcula_informacoes_alunos(lista_alunos) {

    for(let i = 0; i < lista_alunos.length; i++) {

        let colunas = lista_alunos[i].split(",");

        let nome_aluno = colunas[0];
        
        let nota1 = Number(colunas[1].split(":")[1]);
        let nota2 = Number(colunas[2].split(":")[1]);
        let nota3 = Number(colunas[3].split(":")[1]);

        let media = Number(((nota1 + nota2 + nota3)/3).toFixed(2));

        somas_notas_classe += media;

        let indice_presenca = colunas[4].split(" ")[0].split("/");
        let faltas = indice_presenca[0];
        let aulas = indice_presenca[1];

        let percentual_faltas = (faltas/aulas) * 100

        let situacao = verifica_situacao(media, percentual_faltas);

        print(`a média de ${nome_aluno} é ${media}`);
        print(`a situação de ${nome_aluno} é ${situacao}`);

    }

}

function verifica_situacao(media, percentual_faltas) {

    let situacao;

    if(media >= 7) {
        qtd_aprovados++;
        situacao = "Aprovado";
    } else if(media < 7 && media >= 4) {
        qtd_prova_final++;
        situacao = "Em Prova Final";
    } else if(media < 4) {
        qtd_reprovados++;
        situacao = "Reprovado";
    }
    
    if(percentual_faltas > 25) {
        qtd_reprovados_por_falta++;
        situacao = "Reprovado por Falta";
    }

    return situacao;

}

main();