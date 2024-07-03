tope = int(input('ingresa un numero tope: '))

a,b = 1,1
def suma(a,b):
    while a+b <= tope:
        resultado = a + b
        print(resultado)
        b,a = a,resultado
suma(a,b)