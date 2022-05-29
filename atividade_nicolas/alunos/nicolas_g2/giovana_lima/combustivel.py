def main():
    valor_gasolina_posto = float(input('\tValor inicial do litro da gasolina: '))

    petrobras = 0.36*valor_gasolina_posto
    icms = 0.27*valor_gasolina_posto
    etanol = 0.13*valor_gasolina_posto
    imposto_federal = 0.10*valor_gasolina_posto
    distribuição = 0.14*valor_gasolina_posto

    print(f'\nComposição de preços da gasolina a R$ {valor_gasolina_posto:.2f}.\n')
    print(f'Petrobras: R$ {petrobras:.2f}')
    print(f'ICMS: R$ {icms:.2f}')
    print(f'Etanol onidro: R$ {etanol:.2f}')
    print(f'Cide, Pis/Pasep: R$ {imposto_federal:.2f}')
    print(f'Distribuição e revenda: R$ {distribuição:.2f}\n')

    valor_reajuste = float(
        input('\tDigite o valor do reajuste em porcentagem: '))

    reajuste = 0.36 + (valor_reajuste/100)
    valor_final = ((0.73*valor_gasolina_posto) *
                   (1 + valor_reajuste/100)) + 0.27*valor_gasolina_posto

    reajuste_petrobras = 0.36*valor_final
    petrobras = reajuste_petrobras * valor_final
    icms = 0.27*valor_final
    etanol = 0.13*valor_final
    imposto_federal = 0.10*valor_final
    distribuição = 0.14*valor_final

    print(f'\nComposição de preços da gasolina a R$ {valor_final:.2f}.\n')
    print(f'Petrobras: R$ {petrobras:.2f}')
    print(f'ICMS: R$ {icms:.2f}')
    print(f'Etanol onidro: R$ {etanol:.2f}')
    print(f'Cide, Pis/Pasep: R$ {imposto_federal:.2f}')
    print(f'Distribuição e revenda: R$ {distribuição:.2f}\n')

    print(f'Valor final da gasolina no posto: {valor_final:.2f}')


if __name__ == '__main__':
    main()
