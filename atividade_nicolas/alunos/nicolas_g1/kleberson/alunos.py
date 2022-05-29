import re


nome_aluno = input('Nome do aluno: ')
notas_aluno = input('Informe as 3 notas. Cada uma separado por ;: ').split(';')
presenca = input('Informe a quantidade de faltas pela qtd de aulas. ex: 22/90: ').split('/')

nota1 = int(notas_aluno[0])
nota2 = int(notas_aluno[1])
nota3 = int(notas_aluno[2])

faltas = int(notas_aluno[0])
qtd_aulas = int(notas_aluno[1])

contador_aprovados = 0
contador_reprovados = 0
contador_reprovados_por_falta = 0
contador_prova_final = 0

print(nota1)

while notas_aluno < 0 and notas_aluno <= 10 and parar != 0:
    nome_aluno = input('Nome do aluno: ')
    notas_aluno = input('Informe as 3 notas. Cada uma separado por ;: ').split(';')
    presenca = input('Informe a quantidade de faltas pela qtd de aulas. ex: 22/90: ').split('/')
    parar = int(input('Se Deseja parar, digite 0:'))

    if parar == 0:
        mostar_situacao()

def eh_aprovado(n1, n2, n3):
    media_ponderada = n1 + (n2 * 2) + (n3 * 3) / 3
    media = media_ponderada

    if media_ponderada >= 7:
        contador_aprovados += 1
        return contador_aprovados, media

def prova_final(n1, n2, n3):
    media_ponderada = n1 + (n2 * 2) + (n3 * 3) / 3
    #return media_ponderada

    if media_ponderada >= 4 and media_ponderada <  7:
        contador_prova_final += 1
        return contador_aprovados 

def eh_reprovado(n1, n2, n3):
    if eh_aprovado(n1, n2, n3) < 4:
        contador_reprovados += 1
        return contador_aprovados 

def reprovado_por_falta(f, q):
    percentual_falta = (f / q) * 100

    if percentual_falta > 25:
        contador_reprovados_por_falta += 1
        return contador_reprovados_por_falta
 
def mostar_situacao():
    print('Médias dos alunos: {}')