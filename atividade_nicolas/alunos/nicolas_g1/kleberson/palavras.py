frase = input('Digite a frase: ').split(' ')

qtd_caracteres_min = 80
qtd_caracteres_max = 180

contador_de_palavras = 0

for i in frase:
    contador_de_palavras += 1

print('A frase contém {} palavras'.format(contador_de_palavras))

#frase = le ciel est bleu
#quantidade de palavras = 4