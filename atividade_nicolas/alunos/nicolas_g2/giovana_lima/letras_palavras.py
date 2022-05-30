''' Receba uma frase conte e mostre:
quantas palavras de tamanho par e impar, sem espaços.'''


def main():
    frase = (input('Digite uma frase:\n')).split(' ')

    tamanhos = []

    for i in range(len(frase)):
        tamanhos.append(len(frase[i]))
        i += 1

    par = 0
    impar = 0

    print(f'\nQuantidade de caracteres cada palavra: {tamanhos}')
    for k in range(len(tamanhos)):
        if tamanhos[k] % 2 == 0:
            par += 1
        else:
            impar += 1

    print(f'\nPalavras pares: {par}.')
    print(f'Palavras impares: {impar}.')


if __name__ == '__main__':
    main()
