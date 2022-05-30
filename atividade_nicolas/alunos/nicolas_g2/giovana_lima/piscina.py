def main():
    print('\t Indicações para piscina -->')
    largura = float(
        input('Escreva a medida da largura da piscina em cm: '))
    comprimento = float(
        input('Escreva a medida da comprimento da piscina em cm: '))
    profundidade = float(
        input('Escreva a medida da profundidade da piscina em cm: '))

    capacidade = (largura * comprimento * profundidade)/1000
    capacidade_recomendada = 0.85 * capacidade
    agua_evaporada = 0.10 * capacidade_recomendada

    print(f'\nRecomenda-se encher a piscina até {capacidade_recomendada:.2f} litros.\n')

    valor_litro = float(input('Escreva o valor de cada 1000 litros de água: R$ '))     
    sim = capacidade_recomendada % 1000
    valor_a_ser_pago = 0

    if sim == 0:
        valor_a_ser_pago = (capacidade_recomendada // 1000) * valor_litro
    else:
        valor_a_ser_pago = ((capacidade_recomendada // 1000) + 1) * valor_litro

    valor_manutenção = (agua_evaporada//1000) * valor_litro

    print(f'\nValor a ser gasto para encher a piscina: R$ {valor_a_ser_pago:.2f}.')
    print(f'Valor mensal para manter piscina no nível ideal: R$ {valor_manutenção:.2f}')

if __name__ == '__main__':
    main()
