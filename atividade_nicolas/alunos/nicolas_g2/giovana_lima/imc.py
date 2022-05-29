# def acima(x,y,x):
#     if x < 19.8:
#         return 'Peso abaixo do ideal.'
#     elif x < 24.9:
#         return 'Peso ideal.'
#     else:
#         return 'Peso acima do ideal.'

def main():
    print('<-- Ajuste parâmetro IMC -->')
    altura = float(input('Insira sua altura em metros: '))
    peso = float(input('Insira seu peso em quilogramas: '))

    peso_ideal1 = 19.8 * altura**2
    peso_ideal2 = 24.9 * altura**2
    imc = peso / (altura*altura)

    peso_a_ganhar = peso_ideal1-peso
    peso_a_perder = peso-peso_ideal2

    if imc < 19.8:
        print(f'\nPeso abaixo do ideal.\nDeve ganhar: {(peso_a_ganhar):.2f}')
    elif imc < 24.9:
        print('\nPeso ideal.')
    else:
        print(f'\nPeso acima do ideal.\nDeve perder: {(peso_a_perder):.2f}')

    calorias_ingeridas = float(input('\nQuantas calorias você irá consumir em um dia?\n'))

    superavit = calorias_ingeridas + ((peso_a_ganhar * 1000)/90)
    deficit = calorias_ingeridas - ((peso_a_perder *1000)/90)

    if peso_a_perder > 0:
        print(f'\nGasto calórico por dia: {(deficit):.2f} cal')
    elif peso_a_ganhar > 0:
        print(f'\nGasto calórico por dia: {superavit:.2f} cal')
    else:
        print(f'\nPeso ideal. Não faz-se necessário alterações em dieta ou exercicios.')

if __name__ == '__main__':
    main()