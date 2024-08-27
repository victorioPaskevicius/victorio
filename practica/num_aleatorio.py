import random

lista = list(range(20))
numero_aleatorio = random.choice(lista)

def adivinar_num():
    num_usuario = int(input('Adivina el numero del 0 al 20: '))
    while num_usuario != numero_aleatorio:
        if num_usuario < numero_aleatorio:
            print('El numero que introduciste es mas chico')
            num_usuario = int(input('Adivina el numero del 0 al 20: '))
        if num_usuario > numero_aleatorio:
            print('El numero que introduciste es mas gande')
            num_usuario = int(input('Adivina el numero del 0 al 20: '))
    print(f'Que grande, adivinaste, el numero era {numero_aleatorio}')
adivinar_num()