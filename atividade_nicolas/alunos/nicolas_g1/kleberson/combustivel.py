combustivel = int(input('Digite 0 se for alcool ou 1 se for gasolina: '))
distancia_a_ser_percorrida = int(input('Informe a distância a ser percorrida(km): '))

if combustivel == 0:
    rendimento_com_alcool = int(input('Informe o rendimento do carro com álcool(km): '))
    valor_litro_alcool = int(input('Valor do litro do álcool: '))
    valor_a_pagar_alcool = distancia_a_ser_percorrida * valor_litro_alcool / rendimento_com_alcool
    print('O valor a ser pago usando alcool é {} R$'.format(valor_a_pagar_alcool))

if combustivel == 1:
    rendimento_com_gasolina = int(input('Informe o rendimento do carro com gasolina(km): '))
    valor_litro_gasolina = int(input('Valor do litro da gasolina: '))
    valor_a_pagar_gasolina = distancia_a_ser_percorrida * valor_litro_gasolina / rendimento_com_gasolina
    print('O valor a pagar usando gasolina é {} R$'.format(valor_a_pagar_gasolina))

'''
se o carro rende 10/l e o litro for 2,00 e a distância a ser percorrida for 40km
vou pagar = 40 * 2 / 10 == 8,00
'''