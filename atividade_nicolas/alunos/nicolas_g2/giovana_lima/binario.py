def main():
    mensagem = input('Digite a mensagem em binário: ').split('-')
    
    for k in range(len(mensagem)):
        if len(mensagem[k]) % 8 == 0:
            print('-->Sequência de bits OK.')
        else:
            print('\t-->Mensagem corrompida: Sequência de bits inválida.')

    
if __name__ == '__main__':
    main()