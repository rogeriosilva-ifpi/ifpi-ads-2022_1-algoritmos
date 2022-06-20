def main():
    contador = 0
    x = float(input())
    for i in range(100):
        print('N[%d] = %.4f' % (contador, x))
        x /= 2.0
        contador += 1



if __name__ == '__main__':
    main()