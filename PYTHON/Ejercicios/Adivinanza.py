# creando lista de numeros de 0 a 100
import random
numbers = list(range(0,101))
num = random.choice(numbers)

# creando funcion para que el usuario pueda adivinar el numero
def adivinar():
    while True:
        num_usuario = int(input('Ingresa un numero de 0 a 100: '))
        if num_usuario > num:
            print('El numero es menor')
        elif num_usuario < num:
            print('El numero es mayor')
        else:
            print('Bien hecho, has adivinado el numero')
            break
adivinar()